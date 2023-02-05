import React from 'react'
import { Button, Icon, Space, IconType } from '@dance-ui/ui'

export default () => {
  const renderAllIcon = () => {
    const icons = []
    for (const key in IconType) {
      const value = (IconType as any)[key]
      icons.push(value)
    }
    return (
      <>
        {icons.map((icon) => (
          <div key={icon}>
            {icon}:
            <Icon type={icon} style={{ fontSize: 46, color: 'black' }} />
          </div>
        ))}
      </>
    )
  }
  return <Space gap="large">{renderAllIcon()}</Space>
}
