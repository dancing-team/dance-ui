const throttle = (func: any, delay: number) => {
    if (typeof func !== 'function') {
        // Todo 给个开发环境报错
        // if(__DEV__){
        //     // ...
        // }
        return
    }

    let timer: number | null = null
    return function () {
        //@ts-ignore
        let context = this
        let args = arguments
        if (!timer) {
            timer = window.setTimeout(function () {
                func.apply(context, args)
                timer = null
            }, delay)
        }
    }
}

export default throttle