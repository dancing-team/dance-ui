import React from 'react'
import { Space, Carousel } from '@dance-ui/ui'

export default () => (
  <Space justify="center" align="center" style={{ width: '100%' }}>
    <div>
      <h4>默认 </h4>
      <Carousel width={300} height={200}>
        <img src="https://fakeimg.pl/300x200/ff0000/?text=1" width={300} height={200} />
        <img src="https://fakeimg.pl/300x200/0000ff/?text=2" width={300} height={200} />
        <img src="https://fakeimg.pl/300x200/00ff00/?text=3" width={300} height={200} />
      </Carousel>
    </div>
    <div>
      <h4>
        interval={2000} throttleTime={500} defaultActiveIndex={2}
      </h4>
      <Carousel width={360} height={250} interval={2000} throttleTime={1000} defaultActiveIndex={2}>
        <img src="https://fakeimg.pl/360x250/ff0000/?text=1" width={360} height={250} />
        <img src="https://fakeimg.pl/360x250/0000ff/?text=2" width={360} height={250} />
        <img src="https://fakeimg.pl/360x250/00ff00/?text=3" width={360} height={250} />
        <img src="https://fakeimg.pl/360x250/ffff00/?text=4" width={360} height={250} />
        <img src="https://fakeimg.pl/360x250/ff00ff/?text=5" width={360} height={250} />
      </Carousel>
    </div>
    <div>
      <h4>autoPlay = false throttleTime={1000}</h4>
      <Carousel width={360} height={250} throttleTime={1000} autoplay={false}>
        <img src="https://fakeimg.pl/360x250/ff0000/?text=1" width={360} height={250} />
        <img src="https://fakeimg.pl/360x250/0000ff/?text=2" width={360} height={250} />
        <img src="https://fakeimg.pl/360x250/00ff00/?text=3" width={360} height={250} />
        <img src="https://fakeimg.pl/360x250/ffff00/?text=4" width={360} height={250} />
        <img src="https://fakeimg.pl/360x250/ff00ff/?text=5" width={360} height={250} />
      </Carousel>
    </div>
  </Space>
)
