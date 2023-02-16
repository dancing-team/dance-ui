

type stringKey = Record<string, string>

export function formatDate(time: Date, format: String) {
    var date = time || new Date();
    var map: stringKey = {
      'y': date.getFullYear() + "",
      'M': date.getMonth() + 1 + "",//month
      'd': date.getDate() + "",//date
      'H': date.getHours() + "",//hours
      'm': date.getMinutes() + "",//minutes
      's': date.getSeconds() + ""//seconds
    };
    for (var i in map) {
      if (map.hasOwnProperty(i) ) {
        if (parseInt(map[i]) < 10 ) {
          map[i] = '0' + map[i];
        }
      }
    }
    format = format || 'yyyy-MM-dd HH:mm:ss';
    var reg = new RegExp('y+|M+|d+|H+|m+|s+', 'g');
    var regY = new RegExp('y');
    format = format.replace(reg, function (v){
      var old = v;
      if (regY.test(v)) {
        var y = "" + map['y'];
        var len = 4 - v.length;
        old = y.substr(len);
      } else {
        var key = v.substr(0, 1);
        old = map[key];
      }
      return old;
    });
    return format;
  }
