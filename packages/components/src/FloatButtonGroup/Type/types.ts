import { ReactNode } from 'react'

// 此文件旨在构造configItemType类型（FloatButtonGroup配置数组configs的配置项的类型）: 使type与action强绑定——>一种type对应一种action类型

type configItemBase = {
  description?: ReactNode
  type: 'link' | 'elevator' | 'button' | 'backTop'
  action: linkActionConfig | elevatorActionConfig | buttonActionConfig | backTopActionConfig
}

export type linkActionConfig = {
  href?: string
  target?: '_blank' | '_self' | '_parent' | '_top' | 'framename'
}

export type elevatorActionConfig = {
  top?: number
}

export type buttonActionConfig = {
  onClick?: (...arg: any[]) => any
}

export type backTopActionConfig = {
  visibleheight?: number
}

type configSituation_link = {
  type: 'link'
  action: linkActionConfig
} & configItemBase

type configSituation_elevator = {
  type: 'elevator'
  action: elevatorActionConfig
} & configItemBase

type configSituation_button = {
  type: 'button'
  action: buttonActionConfig
} & configItemBase

type configSituation_backTop = {
  type: 'backTop'
  action: backTopActionConfig
} & configItemBase

type configItemType = configSituation_link | configSituation_elevator | configSituation_button | configSituation_backTop

export type { configItemType }
