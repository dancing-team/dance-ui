import { cloneElement, useCallback, ReactElement } from 'react'
import { twMerge } from 'tailwind-merge'

type TabListProps = {
  children?: ReactElement[]
  className?: string
  beforeTabChange?: ({ event, idx }: { event: Event; idx: number }) => Promise<void>

  /** Private */
  id?: string
  selected?: number
  setSelected?: (idx: number) => void
}
function TabList({ selected, children, className, beforeTabChange, id = 'default', setSelected }: TabListProps) {
  const _onClick = useCallback(
    async ({ event, idx }: { event: Event; idx: number }) => {
      await beforeTabChange?.({ event, idx })
      setSelected?.(idx)
    },
    [beforeTabChange, setSelected],
  )
  const renderTabs = useCallback(() => {
    return children?.map((tab, idx) => {
      const onTabClick = (e: Event) => {
        void _onClick({ event: e, idx }) // Call the original onClick
      }
      return cloneElement(tab, {
        id,
        selected: idx === selected,
        onClick: onTabClick,
        key: tab?.props?.key ?? `${id}-tab-${idx}`,
      })
    })
  }, [children, id, selected, _onClick])

  return <div className={twMerge('flex items-stretch gap-4', className)}>{renderTabs()}</div>
}
export default TabList
