//替换字符串
String.prototype.replaceAll = function (reallyDo, replaceWith, ignoreCase) {
  if (!RegExp.prototype.isPrototypeOf(reallyDo)) {
    return this.replace(
      new RegExp(reallyDo, ignoreCase ? 'gi' : 'g'),
      replaceWith
    )
  } else {
    return this.replace(reallyDo, replaceWith)
  }
}

Date.prototype.format = function (format) {
  var o = {
    'M+': this.getMonth() + 1, //month
    'd+': this.getDate(), //day
    'h+': this.getHours(), //hour
    'm+': this.getMinutes(), //minute
    's+': this.getSeconds(), //second
    'q+': Math.floor((this.getMonth() + 3) / 3), //quarter
    S: this.getMilliseconds() //millisecond
  }

  if (/(y+)/.test(format)) {
    format = format.replace(
      RegExp.$1,
      (this.getFullYear() + '').substr(4 - RegExp.$1.length)
    )
  }

  for (var k in o) {
    if (new RegExp('(' + k + ')').test(format)) {
      format = format.replace(
        RegExp.$1,
        RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length)
      )
    }
  }

  return format
}

JSON.parseEx = function (jsondata) {
  jsondata = jsondata.replaceAll('&gt;', '>')
  jsondata = jsondata.replaceAll('&lt;', '<')
  jsondata = jsondata.replaceAll('&nbsp;', ' ')
  jsondata = jsondata.replaceAll('&quot;', '"')
  jsondata = jsondata.replaceAll('&#39;', `'`)
  jsondata = jsondata.replaceAll('\\\\', '\\')
  jsondata = jsondata.replaceAll('\\n', '\n')
  jsondata = jsondata.replaceAll('\\r', '\r')

  return JSON.parse(jsondata);
}

JSON.parseEx2 = function (jsondata) {
  //   var json = new Function('return ' + jsondata)()
  //   return json
}

/**
 * 数据删除
 * @param idx
 * @returns {boolean}
 */
Array.prototype.remove = function (idx) {
  if (isNaN(idx) || idx > this.length) {
    return false
  }
  this.splice(idx, 1)
}
