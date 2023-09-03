import { Tabs, Space, Icon, IconType } from '@dance-ui/ui'
import React from 'react'

const { Tab, TabPanel, TabList } = Tabs

const Demo = () => {
  return (
    <Space direction="vertical" gap={24}>
      <section>
        <p>基础使用演示</p>
        <Tabs>
          <TabList>
            <Tab>Tab 1</Tab>
            <Tab>Tab 2</Tab>
            <Tab>Tab 3</Tab>
            <Tab>Tab 4</Tab>
          </TabList>
          <TabPanel>
            <div>Panel 1</div>
          </TabPanel>
          <TabPanel>
            <div>Panel 2</div>
          </TabPanel>
          <TabPanel>
            <div>Panel 3</div>
          </TabPanel>
          <TabPanel>
            <div>Panel 4</div>
          </TabPanel>
        </Tabs>
      </section>
      <section>
        <p>renderIndicator自定义指示器，可以配合framer-motion等给指示器加上动画效果</p>
        <Tabs id="test1">
          <TabList
            renderIndicator={() => {
              return (
                <Space justify="center" className="absolute inset-x-0 h-5 text-center" style={{ bottom: '-20px' }}>
                  <Icon type={IconType.CLOSE} style={{ fontSize: 20 }} />
                </Space>
              )
            }}>
            <Tab>Tab 1</Tab>
            <Tab>Tab 2</Tab>
            <Tab>Tab 3</Tab>
            <Tab>Tab 4</Tab>
          </TabList>
          <TabPanel>
            <div>Panel 1</div>
          </TabPanel>
          <TabPanel>
            <div>Panel 2</div>
          </TabPanel>
          <TabPanel>
            <div>Panel 3</div>
          </TabPanel>
          <TabPanel>
            <div>Panel 4</div>
          </TabPanel>
        </Tabs>
      </section>
      <section>
        <p>beforeTabChange 可在 Tab 切换时进行拦截，当返回值为 true 时可正常切换，否则不进行切换。点击后请看控制台</p>
        <Tabs id="test2">
          <TabList
            beforeTabChange={async ({ event, idx }) => {
              console.log('beforeTabChange args', { event, idx })
              console.log('It will change after 1000 ms!')
              return new Promise((resolve) =>
                setTimeout(() => {
                  console.log('resolve!')
                  resolve(true)
                }, 1000),
              )
            }}>
            <Tab>Tab 1</Tab>
            <Tab>Tab 2</Tab>
            <Tab>Tab 3</Tab>
            <Tab>Tab 4</Tab>
          </TabList>
          <TabPanel>
            <div>Panel 1</div>
          </TabPanel>
          <TabPanel>
            <div>Panel 2</div>
          </TabPanel>
          <TabPanel>
            <div>Panel 3</div>
          </TabPanel>
          <TabPanel>
            <div>Panel 4</div>
          </TabPanel>
        </Tabs>
      </section>
    </Space>
  )
}
export default Demo
