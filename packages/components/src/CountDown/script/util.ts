type stringKey = Record<string, string>

export function formatDate(time: Date, format: String) {
  const date = time || new Date()
  const map: stringKey = {
    y: date.getFullYear() + '',
    M: date.getMonth() + 1 + '', // month
    d: date.getDate() + '', // date
    H: date.getHours() + '', // hours
    m: date.getMinutes() + '', // minutes
    s: date.getSeconds() + '', // seconds
  }
  for (const i in map) {
    if (map.hasOwnProperty(i)) {
      if (parseInt(map[i]) < 10) {
        map[i] = '0' + map[i]
      }
    }
  }
  format = format || 'yyyy-MM-dd HH:mm:ss'
  const reg = new RegExp('y+|M+|d+|H+|m+|s+', 'g')
  const regY = new RegExp('y')
  format = format.replace(reg, function (v) {
    let old = v
    if (v.includes('y')) {
      const y = '' + map.y
      const len = 4 - v.length
      old = y.substr(len)
    } else {
      const key = v.substr(0, 1)
      old = map[key]
    }
    return old
  })
  return format
}
