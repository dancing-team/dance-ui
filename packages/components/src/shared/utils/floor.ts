const floor = (n: number) => {
    if (!n) {
        return 0
    } else if (n > 0) {
        return ~~n
    } else {
        return ~~(n - 1)
    }
}

export default floor