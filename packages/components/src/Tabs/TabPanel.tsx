import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type TabPanelProps = {
  id?: string
  children?: ReactNode
  className?: string
}

function TabPanel({ id, children, className }: TabPanelProps) {
  return <div className={twMerge('flex-grow', className)}>{children}</div>
}
export default TabPanel
