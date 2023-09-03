import classNames from 'classnames'
import { MouseEventHandler, ReactNode, useCallback } from 'react'
import { twMerge } from 'tailwind-merge'

type TabProps = {
  className?: string
  indicatorClass?: string
  renderIndicator?: (selected?: boolean) => ReactNode
  children?: ReactNode

  /** Private */
  id?: string
  selected?: boolean
  onClick?: MouseEventHandler<HTMLDivElement>
}
function Tab({ children, className, indicatorClass, renderIndicator, id, selected, onClick }: TabProps) {
  const _renderIndicator = useCallback(() => {
    if (!selected) return null
    if (renderIndicator) return renderIndicator(selected)
    return <div className={twMerge('absolute inset-x-0 -bottom-1 border border-dd-primary', indicatorClass)} />
  }, [indicatorClass, renderIndicator, selected])
  return (
    <div
      className={classNames(
        { 'text-dd-primary': selected },
        twMerge('relative flex cursor-pointer items-center justify-center text-xl hover:opacity-70', className),
      )}
      onClick={onClick}>
      {children}
      {_renderIndicator()}
    </div>
  )
}
export default Tab
