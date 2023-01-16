const ceil = (n: number) => {
    if (!n) {
        return 0
    } else if (n > 0) {
        return ~~(n + 1)
    } else {
        return ~~n
    }
}

export default ceil