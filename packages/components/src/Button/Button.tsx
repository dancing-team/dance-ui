import classNames from 'classnames'
import { CSSProperties, forwardRef, LegacyRef, ReactNode, useMemo } from 'react'
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

const ButtonClass = {
  sizeClass: {
    large: 'py-2 px-5',
    middle: 'py-1 px-4',
    small: 'px-1',
  },
  typeClass: {
    default: 'border-black bg-white text-black enabled:hover:border-dd-primary enabled:hover:text-dd-primary',
    primary: 'border-dd-primary bg-dd-primary text-white enabled:hover:opacity-80',
    link: 'border-transparent enabled:hover:text-dd-primary',
  },
  ghostClass: {
    default: 'border-white text-white enabled:hover:border-dd-primary enabled:hover:text-dd-primary',
    primary: 'border-dd-primary bg-transparent text-dd-primary enabled:hover:opacity-80',
    link: 'border-transparent text-white enabled:hover:text-dd-primary',
  },
  dangerClass: {
    default: 'border-dd-danger text-dd-danger enabled:hover:opacity-80',
    primary: 'border-dd-danger bg-dd-danger text-white enabled:hover:opacity-80',
    link: 'border-transparent text-dd-danger enabled:hover:opacity-80',
  },
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
  const { sizeClass, typeClass, dangerClass, ghostClass } = ButtonClass
  const _disabled = disabled || loading
  const _chooseClass = useMemo(() => {
    if ((danger && ghost) || danger) return dangerClass
    else if (ghost) return ghostClass
    else return typeClass
  }, [danger, dangerClass, ghost, ghostClass, typeClass])
  return (
    <button
      ref={ref}
      className={
        type === 'unstyle'
          ? className
          : classNames(
              'box-border border transition focus:outline-none',
              sizeClass[size ?? 'middle'],
              _chooseClass[type ?? 'default'],
              _disabled ? 'disabled:cursor-not-allowed disabled:opacity-60' : 'cursor-pointer',
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
