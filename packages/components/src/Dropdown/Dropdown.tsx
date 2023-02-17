import React, { ReactElement, CSSProperties } from 'react'
import classNames from 'classnames'

import { Popup } from '../overlay'
import { PlacementType } from '../overlay/placement'

import './index.css'

export type dropdownProps = {
    overlay?: ReactElement
    placement?: PlacementType
    className?: string
    children?: ReactElement
    style?: CSSProperties
}

const Dropdown = (props: dropdownProps) => <any> {
    const { placement = "bottomLeft", overlay, className, children, style, ...others } = props

    const cls = classNames({
        'ant-dropdown': true,
        [className as string]: !!className
    })
    const overlayConetent = React.cloneElement(overlay, {
        prefix: 'ant-dropdown-'
    })

    return (<Popup
        {...others}
        triggerType='hover'
        placement={placement}
        className={cls}
        style={style}
        trigger={children}
    >
        {overlayConetent}
    </Popup>)
}

export default Dropdown