import React, { ReactElement } from "react"

export interface VirtualProps {
    /** 数据源 */
    dataSource: ReactElement[]
    /** 外层容器高度 */
    viewportHeight: number

    /** 开始拼接render list时距离顶部/底部的高度 */
    prerenderMoreHeight?: number
    /** 节流delay */
    throttleDelay?: number
    /** 单个节点高度 */
    itemHeight?: number
    /** 单方向上（上或者下）用于滚动缓冲的节点数量 */
    countOfBufferNodes?: number
}