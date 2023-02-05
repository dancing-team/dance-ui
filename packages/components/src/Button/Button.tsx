import classNames from 'classnames'
import { CSSProperties, forwardRef, LegacyRef, ReactNode } from 'react'
import Loading, { LoadingProps } from '../Loading'

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
  style?: CSSProperties

  /** 子组件 */
  children?: ReactNode

  /** Loading图标 CSS className */
  iconClassName?: string
  /** Loading图标参数 */
  loadingIconProps?: LoadingProps
}
const typeClass = {
  default: 'text-black bg-white border-gray-500  enabled:hover:border-blue-500 enabled:hover:text-blue-500',
  primary: 'bg-blue-500 border-blue-500 text-white enabled:hover:bg-blue-400 enabled:hover:border-blue-400',
  link: 'border-transparent enabled:hover:text-blue-500',
}
const ghostClass = {
  default: 'border-white text-white enabled:hover:border-blue-500 enabled:hover:text-blue-500',
  primary: 'bg-transparent text-blue-500 border-blue-500 enabled:hover:text-blue-400 enabled:hover:border-blue-400',
  link: 'border-transparent text-white enabled:hover:text-blue-500',
}
const dangerClass = {
  default: 'text-red-500 border-red-500 enabled:hover:border-red-400 enabled:hover:text-red-400',
  primary:
    'bg-red-500 text-[#fff] border-red-500 enabled:hover:bg-red-400 enabled:hover:text-[#fff] enabled:hover:border-red-400',
  link: 'text-red-500 enabled:hover:text-red-400',
}
const sizeClass = {
  large: 'py-2 px-5',
  middle: 'py-1 px-4',
  small: 'px-1',
}
const Button = forwardRef(function ButtonInner(
  {
    type,
    size,
    className,
    onClick,
    disabled,
    danger,
    ghost,
    loading,
    style,
    children,
    iconClassName,
    loadingIconProps,
  }: ButtonProps,
  ref: LegacyRef<HTMLButtonElement>,
) {
  const _disabled = disabled || loading
  return (
    <button
      ref={ref}
      className={
        type === 'unstyle'
          ? className
          : classNames(
              'box-border border transition focus:outline-none',
              sizeClass[size ?? 'middle'],
              ghost ? ghostClass[type ?? 'default'] : typeClass[type ?? 'default'],
              danger ? dangerClass[type ?? 'default'] : null,
              _disabled ? 'disabled:cursor-not-allowed disabled:opacity-60' : null,
              className,
            )
      }
      style={style}
      onClick={_disabled ? undefined : onClick}
      disabled={_disabled}>
      <Loading show={loading} className={classNames('mr-2', iconClassName)} {...loadingIconProps} />
      {children}
    </button>
  )
})
Button.defaultProps = {
  type: 'default',
  size: 'middle',
  loading: false,
  disabled: false,
}
export default Button
