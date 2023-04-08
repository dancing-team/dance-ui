import { ReactElement, ReactNode, cloneElement, useState } from 'react'
import Tab from './Tab'
import TabList from './TabList'
import TabPanel from './TabPanel'
import { twMerge } from 'tailwind-merge'

export type TabsProps = {
  className?: string
  children?: ReactNode[]
}
function Tabs({ className, children }: TabsProps) {
  const [selected, setSelected] = useState(0)
  if (!children?.length || children?.length <= 1) return null
  const [tabList, ...tabPanels] = children
  return (
    <div className={twMerge('flex flex-col items-center justify-center gap-3', className)}>
      {cloneElement(tabList as ReactElement, {
        selected,
        setSelected,
        ...((tabList as any)?.props ?? {}),
      })}
      {cloneElement((tabPanels as any)[selected], {
        key: `tab-panel-${selected}`,
        ...((tabPanels[selected] as any)?.props ?? {}),
      })}
    </div>
  )
}

Tabs.TabList = TabList
Tabs.Tab = Tab
Tabs.TabPanel = TabPanel
export default Tabs
