import * as React from 'react'

import type { VirtualProps } from './types'

import { throttle } from '../shared/utils'

import './index.css'



const Virtual: React.FC<VirtualProps> = (props) => {
    const {
        viewportHeight,
        dataSource,

        countOfBufferNodes = 5,
        itemHeight = 90,
        throttleDelay = 200,
    } = props

    const [pageCounter, setPageCounter] = React.useState(0)
    /** containerRef挂载在滚动层，用于获取滚动高度scrollTop */
    const containerRef = React.useRef<HTMLDivElement>(null)
    /** 视口内被渲染的节点数量 */
    const renderCountOfItems = React.useMemo(() => Math.ceil(viewportHeight / itemHeight), [viewportHeight, itemHeight])
    /** 初始化时渲染的节点数量，初始化时不能向上滚动，所以往下缓冲节点*/
    const initRenderCountOfItems = React.useMemo(() => renderCountOfItems * (pageCounter + 1) + countOfBufferNodes, [renderCountOfItems, countOfBufferNodes])



    // ---------- state ----------
    /** 滚动视口内第一个 & 最后一个节点的索引值 */
    const [startIndex, setStartIndex] = React.useState(0)
    const [endIndex, setEndIndex] = React.useState(renderCountOfItems - 1)
    /** 节点渲染列表。 */
    const [renderList, setRenderList] = React.useState(dataSource.slice(pageCounter, initRenderCountOfItems))

    // ---------- methods ----------
    const handleScroll = () => {
        const scrollTop = containerRef.current?.scrollTop ?? 0
        concatItems()
        const currentStartIndex = Math.floor(scrollTop / itemHeight)
        const currentEndIndex = currentStartIndex + Math.ceil(viewportHeight / itemHeight);
        if (currentStartIndex === startIndex && currentEndIndex === endIndex) return
        requestAnimationFrame(() => {
            setStartIndex(currentStartIndex)
            setEndIndex(currentEndIndex)
        });
    }

    const concatItems = () => {
        setPageCounter(pageCounter + 1)
        setRenderList(prev => {
            return [...prev, ...dataSource.slice(initRenderCountOfItems + pageCounter * countOfBufferNodes, initRenderCountOfItems + (pageCounter + 1) * countOfBufferNodes)]
        })
    }

    // ---------- render ----------
    return (
        <div
            className='container'
            ref={containerRef}
            onScroll={throttle(handleScroll, throttleDelay)}
        >
            <div
                className='wrapper'
                style={{ height: dataSource.length * itemHeight }}
            >
                {React.Children.map(renderList.slice(
                    startIndex - countOfBufferNodes < 0
                        ? startIndex
                        : startIndex - countOfBufferNodes,
                    endIndex + countOfBufferNodes > dataSource.length
                        ? endIndex
                        : endIndex + countOfBufferNodes),
                    (item, index) => {
                        return React.cloneElement(item,
                            {
                                className: 'scroll-item',
                                style: {
                                    position: 'absolute',
                                    left: 0,
                                    top: 0,
                                    height: `${itemHeight}px`,
                                    transform: `translateY(${(startIndex + index) * itemHeight}px)`,
                                }
                            }
                        )
                    })}
            </div>
        </div>
    )
}

export default Virtual