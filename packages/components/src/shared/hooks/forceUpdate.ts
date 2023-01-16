import { useState } from 'react'

const [forceUpdateTag, forceUpdate] = useState(false)

export {
    forceUpdateTag,
    forceUpdate
}