import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type TabPanelProps = {
  children?: ReactNode
  className?: string
}

function TabPanel({ children, className }: TabPanelProps) {
  return <div className={twMerge('flex-grow', className)}>{children}</div>
}
export default TabPanel
