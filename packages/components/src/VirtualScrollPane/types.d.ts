import React from "react"

export interface VirtualProps {
    dataSource: React.ReactNode[]
    viewportHeight: number
    
    prerenderMoreHeight?: number
    throttleDelay?: number
    itemHeight?: number
    renderItems?: number
}