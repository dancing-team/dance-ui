import { ReactElement, ReactNode, cloneElement } from 'react'
import { twMerge } from 'tailwind-merge'

type TabListProps = {
  selected?: number
  setSelected?: (idx: number) => void
  children?: ReactNode[]
  className?: string
}
function TabList({ selected, setSelected, children, className }: TabListProps) {
  return (
    <div className={twMerge('flex items-stretch gap-4', className)}>
      {children?.map((children, idx) => {
        return cloneElement(children as ReactElement, {
          selected: idx === selected,
          onClick: () => setSelected?.(idx),
          key: `tab ${idx}`,
        })
      })}
    </div>
  )
}
export default TabList
