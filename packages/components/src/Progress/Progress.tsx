import classNames from 'classnames'
import React, { LegacyRef } from 'react'

export type ProgressProps = {
  /** 按钮类型 */
  type?: 'default' | 'primary' | 'link' | 'unstyle'
  /** 按钮大小 */
  size?: 'large' | 'middle' | 'small'
  /** 点击事件 */
  onClick?: () => void
  /** 是否为危险按钮（红色警告） */
  danger?: boolean
  /** 是否为幽灵按钮 */
  ghost?: boolean
  /** 是否禁用 */
  disabled?: boolean
  /** 是否加载中 */
  loading?: boolean
  /** 组件额外的 CSS className */
  className?: string
  /** 组件额外的 CSS style */
  style?: React.CSSProperties
}

const Progress = React.forwardRef(function ProgressInner(
  { type, size, className, onClick, disabled, danger, ghost, loading, style, children }: React.PropsWithChildren<ProgressProps>,
  ref: LegacyRef<HTMLButtonElement>,
) {
  return (
    <div></div>
  )
})
Progress.defaultProps = {
  type: 'default',
  size: 'middle',
  loading: false,
}
export default Progress
