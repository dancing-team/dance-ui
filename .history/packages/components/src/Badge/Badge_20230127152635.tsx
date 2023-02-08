import classNames from 'classnames'
import React, { LegacyRef } from 'react'

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
  /** 设置 Badge 为状态点 */
  type?: 'success' | 'processing' | 'default' | 'error' | 'warning' | 'unstyle'
  /** 在设置了 status 的前提下有效，设置状态点的文本 */
  text?: number
  /** 设置鼠标放在状态点上时显示的文字 */
  title?: string
  /** 组件额外的 CSS className */
  className?: string
  /** 组件额外的 CSS style */
  style?: React.CSSProperties
}



const Badge: React.FunctionComponent<React.PropsWithChildren<BadgeProps>> = React.forwardRef(function BadgeInner(
  {
    color,
    count,
    dot,
    offset,
    overflowCount,
    showZero,
    size,
    type,
    text,
    title,
    className,
    style,
    children,
  }: React.PropsWithChildren<BadgeProps>,
  ref: LegacyRef<HTMLButtonElement>,
) {
  overflowCount = overflowCount ?? 99
  showZero = showZero ?? false
  /** 最小数字 - 1 */
  let minNum: number = 0
  if (showZero) {
    minNum = -1
  }

  const computedCount = useMemo(() => {
    if (count) {
      if (maxCount) {
        if (count > maxCount) {
          return `${maxCount}+`;
        } else {
          return count;
        }
      } else {
        return count;
      }
    }
  }, [count, maxCount]);


  if (type === 'default' || type === 'unstyle') {
    return (
      <div
        className={
          type === 'unstyle'
            ? className
            : classNames(
                'box-border border transition focus:outline-none',
                sizeClass[size ?? 'middle'],
                danger ? dangerClass[type ?? 'default'] : null,
                ghost ? ghostClass[type ?? 'default'] : typeClass[type ?? 'default'],
                className,

              )
        }
        style={{
          position: 'absolute',
          right: offset ? -offset[0] : 0,
          left: offset ? -offset[1] : 0,
          color,
          ...style,
        }}
        title={title}>
        {dot === undefined && count && count > minNum && count <= overflowCount
          ? count
          : count && count > overflowCount
          ? overflowCount.toString() + '+'
          : ''}
      </div>
    )
  } else {
    return (
      <div>
        <div></div>
        <span>{text}</span>
      </div>
    )
  }
})
Badge.defaultProps = {}

export default Badge
