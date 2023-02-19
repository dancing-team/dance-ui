import React from 'react'
import { Carousel } from '@dance-ui/ui'

export default () => (
  <>
    <Carousel width={300} height={200}>
      <img src="https://fakeimg.pl/300x200/ff0000/?text=1" width={300} height={200} alt="" />
      <img src="https://fakeimg.pl/300x200/0000ff/?text=2" width={300} height={200} alt="" />
      <img src="https://fakeimg.pl/300x200/00ff00/?text=3" width={300} height={200} alt="" />
    </Carousel>
  </>
)
