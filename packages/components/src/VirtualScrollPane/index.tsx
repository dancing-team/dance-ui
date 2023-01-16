import React, {
    useState,
    useRef,
} from 'react'

import { forceUpdate } from '../shared/hooks'
import { throttle } from '../shared/utils'

import type { VirtualProps } from './types'

import './style.css'

const Virtual: React.FC<VirtualProps> = (props) => {
    const {
        itemHeight = 90,
        renderItems = 10,
        throttleDelay = 200,
        prerenderMoreHeight = 400,
        viewportHeight,
        dataSource
    } = props

    // ----------- states -----------
    const [startPosition, setStartPosition] = useState(0)
    const [endPosition, setEndPosition] = useState(renderItems - 1)
    const [renderingMoreTag, setRenderingMoreTag] = useState(false)
    const [pageNo, setPageNo] = useState(2)
    const outerSliderRef = useRef<HTMLDivElement>(null)
    const currentRenderItems = dataSource.slice(0, 19)


    // ----------- methods -----------
    const handleScroll = () => {
        // FIXME 组件库里面用可选链？
        const scrollTop = outerSliderRef?.current?.scrollTop ?? 0
        if (currentRenderItems.length * itemHeight - scrollTop - viewportHeight < prerenderMoreHeight && !renderingMoreTag) {
            setRenderingMoreTag(true)

            setTimeout(() => {
                currentRenderItems.push(...dataSource.slice(pageNo * renderItems, pageNo * renderItems + (renderItems - 1)))
                setPageNo(prev => prev + 1)
                handleScroll()
                setRenderingMoreTag(false)
                forceUpdate(prev => !prev)
            }, 500)
        }

    }

    // ----------- render -----------
    return (
        <div className="main" ref={outerSliderRef} onScroll={throttle(handleScroll, throttleDelay)}>
            <div
                className="wrap"
                style={{
                    height: currentRenderItems.length * itemHeight * 2,// 这里默认是2倍屏
                }}
            >
                {currentRenderItems.slice(startPosition, endPosition).map((item, index) => {
                    return (
                        <div
                            className="item"
                            key={index}
                            // FIXME 拆css
                            style={{
                                position: 'absolute',
                                left: 0,
                                top: 0,
                                transform: `translateY(${(startPosition + index) * itemHeight}px)`,
                            }}
                        >
                            {item}
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default Virtual