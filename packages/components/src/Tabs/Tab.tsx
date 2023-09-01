import classNames from 'classnames'
import { MouseEventHandler, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type TabProps = {
  className?: string
  indicatorClass?: string
  children?: ReactNode

  /** Private */
  id?: string
  selected?: boolean
  onClick?: MouseEventHandler<HTMLDivElement>
}
function Tab({ children, className, indicatorClass, selected, onClick }: TabProps) {
  return (
    <div
      className={classNames(
        { 'text-dd-primary': selected },
        twMerge('relative flex cursor-pointer items-center justify-center text-xl hover:opacity-70', className),
      )}
      onClick={onClick}>
      {children}
      {selected && <div className={twMerge('absolute inset-x-0 -bottom-1 border-t-2 border-dd-primary', indicatorClass)} />}
    </div>
  )
}
export default Tab
