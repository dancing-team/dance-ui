import classNames from 'classnames'
import React from 'react'

export type BadgeProps = {
  /** 自定义小圆点的颜色 */
  color?: string
  /** 展示的数字，大于 overflowCount 时显示为 ${overflowCount}+，为 0 时隐藏 */
  count?: number
  /** 设置状态点的位置偏移正值为右/上 */
  offset?: [number, number]
  /** 展示封顶的数字值 */
  overflowCount?: number
  /** 当数值为 0 时，是否展示 Badge */
  showZero?: boolean
  /** 在设置了 count 的前提下有效，设置小圆点的大小 */
  size?: 'default' | 'small'
  /** 设置鼠标放在状态点上时显示的文字 */
  title?: string
  /** 组件额外的 CSS className */
  className?: string
  /** 组件额外的 CSS style */
  style?: React.CSSProperties
  /** 组件额外的 子节点 */
  children?: any
}

const sizeStyle = {
  default: 'h-5 w-5 text-xs',
  small: 'h-4 w-4 text-xs',
}

const Badge = (props: BadgeProps): JSX.Element => {
  const { color, count, offset, overflowCount, showZero, title, className, children, style } = props

  let { size } = props
  if (!count) {
    size = 'default'
  }
  /** 最小数字 -1 */
  let minNum: number = 0
  if (showZero) {
    minNum = -1
  }

  const computedCount = (): number | string => {
    if (count && count > minNum) {
      if (overflowCount) {
        if (count > overflowCount) {
          return `${overflowCount}+`
        } else {
          return count
        }
      } else {
        return count
      }
    } else {
      return ''
    }
  }

  const countStyle = (): React.CSSProperties => {
    const length: number = String(computedCount()).length
    if (length === 1) {
      return {
        borderRadius: '50%',
      }
    } else {
      if (size === 'default') {
        return {
          width: `${length * 0.5 + 0.75}rem`,
          borderRadius: '20px',
        }
      } else {
        return {
          width: `${length * 0.4 + 0.75}rem`,
          borderRadius: '20px',
        }
      }
    }
  }

  const countRight = (): number => {
    const length: number = String(computedCount()).length
    if (length === 1) {
      if (offset) {
        return size === 'default' ? -offset[0] - 10 : -offset[0] - 8
      } else {
        return size === 'default' ? -10 : -8
      }
    } else {
      if (offset) {
        return size === 'default' ? -offset[0] - (length * 0.5 + 0.75) * 8 : -offset[0] - (length * 0.4 + 0.75) * 8
      } else {
        return size === 'default' ? -(length * 0.5 + 0.75) * 8 : -(length * 0.4 + 0.75) * 8
      }
    }
  }

  const countTop = (): number => {
    if (offset) {
      return size === 'default' ? -offset[1] - 10 : -offset[1] - 8
    } else {
      return size === 'default' ? -10 : -6
    }
  }

  const BadgeNode = React.Children.map(children, (c) => {
    return React.cloneElement(
      c,
      { ...children.props, className: 'relative' },
      <div style={style}>
        {children?.props?.children}
        <div
          className={classNames(
            'absolute box-border flex items-center justify-center border text-white transition focus:outline-none',
            sizeStyle[size ?? 'default'],
            className,
          )}
          style={{
            right: countRight(),
            top: countTop(),
            backgroundColor: color,
            ...countStyle(),
          }}
          title={title}>
          {computedCount()}
        </div>
      </div>,
    )
  })
  if (children) {
    return BadgeNode
  } else {
    return (
      <div style={style}>
        <div
          className={classNames(
            'box-border flex items-center justify-center border text-white transition focus:outline-none',
            sizeStyle[size ?? 'default'],
            className,
          )}
          style={{
            right: countRight(),
            top: countTop(),
            backgroundColor: color,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            ...countStyle(),
          }}
          title={title}>
          {computedCount()}
        </div>
      </div>
    )
  }
}

Badge.defaultProps = {
  color: 'red',
  size: 'default',
  offset: [0, 0],
  overflowCount: 99,
  showZero: false,
}

export default Badge
