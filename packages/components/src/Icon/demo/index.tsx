import { Icon, IconType } from '@dance-ui/ui'
import React from 'react'

export default () => {
  const renderAllIcon = () => {
    const icons: IconType[] = []
    for (const key in IconType) {
      const name = (IconType as any)[key]
      icons.push(name)
    }
    return (
      <>
        {icons.map((icon) => (
          <div key={icon} className="flex flex-col items-center">
            <Icon type={icon} style={{ fontSize: 46, color: 'black' }} />
            <div>{icon}</div>
          </div>
        ))}
      </>
    )
  }
  return renderAllIcon()
}
