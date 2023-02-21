import { ReactNode } from "react"

// 此文件旨在构造configItemType类型（FloatButtonGroup配置数组configs的配置项的类型）: 使type与action强绑定——>一种type对应一种action类型

interface configItemBase {
    description?: ReactNode,
    type: "link" | "elevator" | "button" | "backTop",
    action: linkActionConfig | elevatorActionConfig | buttonActionConfig | backTopActionConfig
}

export interface linkActionConfig {
    href?: string,
    target?: '_blank' | '_self' | '_parent' | '_top' | 'framename'
}

export interface elevatorActionConfig {
    top?: number,
}

export interface buttonActionConfig {
    onClick?: (...arg: any[]) => any,
}

export interface backTopActionConfig {
    visibleheight?: number
}

interface configSituation_link extends configItemBase {
    type: "link"
    action: linkActionConfig
}

interface configSituation_elevator extends configItemBase {
    type: "elevator"
    action: elevatorActionConfig
}

interface configSituation_button extends configItemBase {
    type: "button"
    action: buttonActionConfig
}

interface configSituation_backTop extends configItemBase {
    type: "backTop"
    action: backTopActionConfig
}

type configItemType = configSituation_link | configSituation_elevator | configSituation_button | configSituation_backTop;

export type {configItemType};