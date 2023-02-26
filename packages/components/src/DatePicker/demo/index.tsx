import React, { useState } from 'react'
import { DatePicker, Space } from '@dance-ui/ui'

export default () => {
  const [selectDateString, setSelectDateString] = useState('')
  const onChange = (date, dateString) => {
    console.log({ date, dateString })
    setSelectDateString(dateString)
  }
  return (
    <Space direction="vertical">
      <div>nowDate: {selectDateString}</div>
      <DatePicker onChange={onChange} />
    </Space>
  )
}
