import * as React from 'react'

const useForceUpdate = () => {
    const [, forceUpdate] = React.useState({})

    return React.useCallback(() => forceUpdate({}), [])
}

export default useForceUpdate