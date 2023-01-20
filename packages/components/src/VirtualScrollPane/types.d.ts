import React, { ReactElement } from "react"

export interface VirtualProps {
    dataSource: ReactElement[]
    viewportHeight: number

    prerenderMoreHeight?: number
    throttleDelay?: number
    itemHeight?: number
    renderItems?: number
}