import { Tabs } from '@dance-ui/ui'
import React from 'react'

const { Tab, TabPanel, TabList } = Tabs

const Demo = () => {
  return (
    <Tabs className="gap-2">
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
  )
}
export default Demo
