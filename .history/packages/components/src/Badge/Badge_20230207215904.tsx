import classNames from 'classnames'
import * as React from 'react'
import './style/index'

export type BadgeProps = {
  /** 自定义小圆点的颜色 */
  color: string
  /** 展示的数字，大于 overflowCount 时显示为 ${overflowCount}+，为 0 时隐藏 */
  count?: number
  /** 不展示数字，只有一个小红点 */
  dot?: boolean
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
  children: any
}

const sizeStyle = {
  default: 'h-4 w-4 rounded-full',
  small: 'h-2 w-2 rounded-full',
}

const Badge = React.forwardRef((props: BadgeProps, ref) => {
  const { color, count, dot, offset, overflowCount = 99, showZero = false, title, className, children } = props

  let { size } = props

  if (dot ?? !count) {
    size = 'default'
  }
  /** 最小数字 - 1 */
  let minNum: number = 0
  if (showZero) {
    minNum = -1
  }
  // console.log(children.props)

  // const { children } = props
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
    // console.log(1)
    if (children) {
      if (String(computedCount).length > 1) {
        return {
          borderRadius: '20px',
        }
      } else {
        return {
          borderRadius: '50%',
        }
      }
    } else {
      if (String(computedCount).length === 1) {
        return {
          padding: '',
        }
      } else {
        return {
          padding: '0 6px',
        }
      }
    }
  }

  const countRight = (): number => {
    if (offset) {
      return size === 'default' ? -offset[1] - 8 : -offset[1] - 4
    } else {
      return size === 'default' ? -8 : -4
    }
  }

  const countLeft = (): number => {
    if (offset) {
      return size === 'default' ? -offset[1] - 8 : -offset[1] - 4
    } else {
      return size === 'default' ? -8 : -4
    }
  }

  return React.Children.map(children, (c) => {
    return React.cloneElement(
      c,
      { ...children.props, style: "{ position: 'relation' } "},
      <div
        className={classNames('box-border border transition focus:outline-none', sizeStyle[size ?? 'default'], className)}
        style={{
          position: 'absolute',
          right: countRight(),
          top: countLeft(),
          backgroundColor: color,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          ...countStyle(),
        }}
        title={title}>
        {computedCount()}
      </div>,
    )
  })
})

Badge.defaultProps = {
  size: 'default',
  offset: [0, 0],
}

export default Badge
