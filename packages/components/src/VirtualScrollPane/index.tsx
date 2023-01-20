import React from 'react'

import type { VirtualProps } from './types'

import { throttle } from '../shared/utils'

import './index.css'

let pageCounter = 0

const Virtual: React.FC<VirtualProps> = (props) => {
    const {
        itemHeight = 90,
        renderItems = 10,
        throttleDelay = 200,
        prerenderMoreHeight = 200,
        viewportHeight,
        dataSource
    } = props

    // state
    const containerRef = React.useRef<HTMLDivElement>(null)
    // const [pageCounter, setPageCounter] = React.useState(0)
    // const [renderList, setrenderList] = React.useState<ReactElement[]>([])
    const [startIndex, setStartIndex] = React.useState(0)
    const [endIndex, setEndIndex] = React.useState(renderItems - 1)
    const [, forceUpdate] = React.useState({})
    const renderList = React.useRef(dataSource.slice(0, renderItems))


    // effect
    // React.useEffect(() => {
    //     setrenderList(dataSource.slice(renderItems * pageCounter, renderItems * (pageCounter + 1)))
    // }, [])

    React.useEffect(() => {
        console.log('当前渲染长度', renderList)
        console.log('开始位置', startIndex)
        console.log('结束位置', endIndex)
    }, [renderList.current.length, startIndex, endIndex])

    //methods
    const handleScroll = () => {
        // 渲染区域总高度 & 滚动距离
        const renderListHeight = renderList.current.length * itemHeight
        const scrollTop = containerRef.current?.scrollTop ?? 0
        console.log(renderListHeight - scrollTop - viewportHeight, prerenderMoreHeight)

        if (renderListHeight - scrollTop - viewportHeight < prerenderMoreHeight) {
            pageCounter += 1
            // 这个拼接很奇怪
            renderList.current.push(...dataSource.slice(pageCounter * renderItems, pageCounter * renderItems + 5))

            let newStartIndex = Math.floor(scrollTop / itemHeight)
            let newEndIndex = newStartIndex + Math.ceil(viewportHeight / itemHeight)

            // requestAnimationFrame(() => {
            setStartIndex(newStartIndex)
            setEndIndex(newEndIndex)
            // })
        }
    }

    //render
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
                {React.Children.map(renderList.current.slice(startIndex, endIndex), (item, index) => {
                    return React.cloneElement(item,
                        {
                            className: 'scroll-item',
                            style: {
                                position: 'absolute',
                                left: 0,
                                top: 0,
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