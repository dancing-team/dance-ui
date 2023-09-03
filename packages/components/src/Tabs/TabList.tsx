import { ReactElement, ReactNode, cloneElement, useCallback } from 'react'
import { twMerge } from 'tailwind-merge'

type TabListProps = {
  children?: ReactElement[]
  className?: string
  beforeTabChange?: ({ event, idx }: { event: Event; idx: number }) => Promise<boolean>
  renderIndicator?: (selected?: boolean) => ReactNode

  /** Private */
  id?: string
  selected?: number
  setSelected?: (idx: number) => void
}
function TabList({
  selected,
  children,
  className,
  beforeTabChange,
  id = 'default',
  setSelected,
  renderIndicator,
}: TabListProps) {
  const _onClick = useCallback(
    ({ event, idx }: { event: Event; idx: number }) => {
      if (!beforeTabChange) {
        setSelected?.(idx)
        return
      }
      beforeTabChange({ event, idx })
        .then((isOK) => {
          if (isOK) setSelected?.(idx)
        })
        .catch((e) => {
          console.error(e)
        })
    },
    [beforeTabChange, setSelected],
  )
  const renderTabs = useCallback(() => {
    return children?.map((tab, idx) => {
      const onTabClick = (e: Event) => {
        _onClick({ event: e, idx }) // Call the original onClick
      }
      return cloneElement(tab, {
        id,
        selected: idx === selected,
        onClick: onTabClick,
        renderIndicator: tab?.props?.renderIndicator ?? renderIndicator,
        key: tab?.props?.key ?? `${id}-tab-${idx}`,
      })
    })
  }, [children, id, selected, renderIndicator, _onClick])

  return <div className={twMerge('flex items-stretch gap-4', className)}>{renderTabs()}</div>
}
export default TabList
