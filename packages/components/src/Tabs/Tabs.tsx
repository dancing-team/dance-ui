import { ReactElement, cloneElement, useState } from 'react'
import Tab from './Tab'
import TabList from './TabList'
import TabPanel from './TabPanel'
import { twMerge } from 'tailwind-merge'

export type TabsProps = {
  id?: string
  className?: string
  children?: ReactElement[]
}
function Tabs({ id = 'default', className, children }: TabsProps) {
  const [selected, setSelected] = useState(0)
  const [tabList, ...tabPanels] = children ?? []

  if (!children?.length || children?.length <= 1) throw new Error('Tabs must have at least 2 children')
  return (
    <div className={twMerge('flex flex-col items-center justify-center gap-3', className)}>
      {cloneElement(tabList, {
        selected,
        setSelected,
        onClick: tabList?.props?.onClick,
        id,
        ...(tabList?.props ?? {}),
      })}
      {cloneElement(tabPanels[selected], {
        key: tabPanels[selected]?.props?.key ?? `${id}-tab-panel-${selected}`,
        ...(tabPanels[selected]?.props ?? {}),
      })}
    </div>
  )
}

Tabs.TabList = TabList
Tabs.Tab = Tab
Tabs.TabPanel = TabPanel
export default Tabs
