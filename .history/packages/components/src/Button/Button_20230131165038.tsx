import classNames from 'classnames'
import React, { LegacyRef, useMemo } from 'react'

export type ButtonProps = {
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
const typeClass = {
  default: 'bg-white border-gray-500 hover:border-blue-500 hover:text-blue-500',
  primary: 'bg-blue-500 border-blue-500 text-white hover:bg-blue-400 hover:border-blue-400',
  link: 'border-transparent hover:text-blue-500',
}
const ghostClass = {
  default: 'border-white text-white hover:border-blue-500 hover:text-blue-500',
  primary: 'bg-transparent text-blue-500 border-blue-500 hover:text-blue-400 hover:border-blue-400',
  link: 'border-transparent text-white hover:text-blue-500',
}

const dangerClass = {
  default: 'text-red-500 border-red-500 hover:border-red-400 hover:text-red-400',
  primary: 'bg-red-500 text-[#fff] border-red-500 hover:bg-red-400 hover:text-[#fff] hover:border-red-400',
  link: 'text-red-500 hover:text-red-400',
}
const sizeClass = {
  large: 'py-2 px-5',
  middle: 'py-1 px-4',
  small: 'px-1',
}
const Button = React.forwardRef(function ButtonInner(
  { type, size, className, onClick, disabled, danger, ghost, loading, style, children }: React.PropsWithChildren<ButtonProps>,
  ref: LegacyRef<HTMLButtonElement>,
) {
  return (
    <button
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
      style={style}
      onClick={loading ? undefined : onClick}
      ref={ref}
      disabled={disabled}>
      {/* <Loading show={loading} className="mr-2" /> */}
      {children}
    </button>
  )
})
Button.defaultProps = {
  type: 'default',
  size: 'middle',
  loading: false,
}
export default Button
