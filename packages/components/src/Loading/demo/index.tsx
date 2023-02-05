import React from 'react'
import { Loading, Space, IconType } from '@dance-ui/ui'

export default () => (
  <Space style={{ fontSize: 40 }} align="center">
    <Loading />
    <Loading style={{ color: 'red' }} />
    <Loading style={{ color: 'blue', width: 60, height: 60 }} />
    <Loading style={{ color: 'blue', width: 60, height: 60 }} />
    <Loading iconType={IconType.DELETE} style={{ width: 60, height: 60 }} />
  </Space>
)
