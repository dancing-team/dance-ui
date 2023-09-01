import { Tabs, Space } from '@dance-ui/ui'
import React from 'react'

const { Tab, TabPanel, TabList } = Tabs

const Demo = () => {
  return (
    <Space direction="vertical">
      <Tabs>
        <TabList>
          <Tab>Tab 1</Tab>
          <Tab>Tab 2</Tab>
        </TabList>
        <TabPanel enableAnim>
          <div>Panel 1</div>
        </TabPanel>
        <TabPanel enableAnim>
          <div>Panel 2</div>
        </TabPanel>
      </Tabs>
      <h3>id & beforeTabChange (View Console)</h3>
      <Tabs id="test">
        <TabList
          beforeTabChange={async (toIdx) => {
            console.log('toIdx', toIdx)
            console.log('It will change after 2000 ms!')
            await new Promise((resolve) => setTimeout(resolve, 2000))
          }}>
          <Tab>Tab 1</Tab>
          <Tab>Tab 2</Tab>
          <Tab>Tab 3</Tab>
          <Tab>Tab 4</Tab>
        </TabList>
        <TabPanel enableAnim>
          <div>Panel 1</div>
        </TabPanel>
        <TabPanel enableAnim>
          <div>Panel 2</div>
        </TabPanel>
        <TabPanel enableAnim>
          <div>Panel 3</div>
        </TabPanel>
        <TabPanel enableAnim>
          <div>Panel 4</div>
        </TabPanel>
      </Tabs>
    </Space>
  )
}
export default Demo
