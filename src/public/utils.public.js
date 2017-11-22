let _utils = {}

_utils.img_onerror = function(e, srcUrl) {
  e.src = srcUrl
  e.onerror = null
}

//参数说明：num 要格式化的数字 n 保留小数位
_utils.formatNum = function(num, n) {
  if (typeof num == 'string') {
    num = parseFloat(num)
  }
  num = String(num.toFixed(n))
  let re = /(-?\d+)(\d{10})/
  while (re.test(num)) num = num.replace(re, '$1,$2')
  return num
}

_utils.getDate = function(o) {
  let arr, day, month, res
  if (typeof o === 'object') {
    month = o.getMonth() + 1
    if (month < 10) {
      month = 0 + '' + month
    }
    day = o.getDate()
    if (day < 10) {
      day = 0 + '' + day
    }
    res = [o.getFullYear(), month, day].join('-')
  } else if (typeof o === 'string') {
    arr = o.split('-')
    if (arr[1] < 10) {
      arr[1] = 0 + '' + arr[1]
    }
    if (arr[2] < 10) {
      arr[2] = 0 + '' + arr[2]
    }
    res = arr.join('-')
  }
  return res
}

//日期比较,是否第一个时间大于第二个时间
_utils.dayu_time = function(firstTime, secondTime) {
  if (undefined == firstTime) return false
  firstTime = Date.parse(firstTime)
  secondTime =
    secondTime == undefined ? new Date().getTime() : Date.parse(secondTime)
  if (firstTime - secondTime > 0) return true
  else return false
}

//sDate1和sDate2是2006-12-18格式
_utils.DateDiff = function(sDate1, sDate2) {
  let aDate, oDate1, oDate2, iDays
  aDate = sDate1.split('-')
  oDate1 = new Date(aDate[0] + '-' + aDate[1] + '-' + aDate[2]) //转换为12-18-2006格式
  aDate = sDate2.split('-')
  oDate2 = new Date(aDate[0] + '-' + aDate[1] + '-' + aDate[2])
  iDays = parseInt(Math.abs(oDate1 - oDate2) / 1000 / 60 / 60 / 24) //把相差的毫秒数转换为天数
  return iDays + 1
}

//日期相加
_utils.addDate = function(date, days) {
  date = date.replaceAll('-', '/')
  let d = new Date(date)
  d.setDate(d.getDate() + days)
  let month = d.getMonth() + 1
  let day = d.getDate()
  if (month < 10) {
    month = '0' + month
  }
  if (day < 10) {
    day = '0' + day
  }
  let val = d.getFullYear() + '-' + month + '-' + day
  return val
}

//第一个字母大写
_utils.ReplaceFirstUper = function(str) {
  str = str.toLowerCase()
  return str.replace(/\b(\w)|\s(\w)/g, function(m) {
    return m.toUpperCase()
  })
}

/**
 * 获取当前URL
 * @param config
 */
_utils.get_url = function(config) {
  let result = ''
  config = config || 'root'
  if (config == 'root') {
    result = window.location.protocol + '//' + window.location.host
  } else if (config == 'href') {
    result = window.location.href
  }
  return result
}

_utils.jsonToUrl = function(obj) {
  let result = ''
  if (obj) {
    for (let prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        result += '&' + prop + '=' + obj[prop]
      }
    }
  }
  return result
}

_utils.jsonFormat = function(data) {
  return data
}

_utils.NewBlob = function(data, datatype) {
  let out
  try {
    out = new Blob([data], { type: datatype })
    console.debug('case 1')
  } catch (e) {
    window.BlobBuilder =
      window.BlobBuilder ||
      window.WebKitBlobBuilder ||
      window.MozBlobBuilder ||
      window.MSBlobBuilder

    if (e.name == 'TypeError' && window.BlobBuilder) {
      let bb = new window.BlobBuilder()
      bb.append(data)
      out = bb.getBlob(datatype)
      console.debug('case 2')
    } else if (e.name == 'InvalidStateError') {
      // InvalidStateError (tested on FF13 WinXP)
      out = new Blob([data], { type: datatype })
      console.debug('case 3')
    } else {
      // We're screwed, blob constructor unsupported entirely
      console.debug('Errore')
    }
  }
  return out
}

/*根据出生日期算出年龄*/
_utils.get_age = function(strBirthday) {
  let returnAge
  let strBirthdayArr = strBirthday.split('-')
  let birthYear = strBirthdayArr[0]
  let birthMonth = strBirthdayArr[1]
  let birthDay = strBirthdayArr[2]

  let d = new Date()
  let nowYear = d.getFullYear()
  let nowMonth = d.getMonth() + 1
  let nowDay = d.getDate()

  if (nowYear == birthYear) {
    returnAge = 0 //同年 则为0岁
  } else {
    let ageDiff = nowYear - birthYear //年之差
    if (ageDiff > 0) {
      if (nowMonth == birthMonth) {
        let dayDiff = nowDay - birthDay //日之差
        if (dayDiff < 0) {
          returnAge = ageDiff - 1
        } else {
          returnAge = ageDiff
        }
      } else {
        let monthDiff = nowMonth - birthMonth //月之差
        if (monthDiff < 0) {
          returnAge = ageDiff - 1
        } else {
          returnAge = ageDiff
        }
      }
    } else {
      returnAge = -1 //返回-1 表示出生日期输入错误 晚于今天
    }
  }
  return returnAge //返回周岁年龄
}

_utils.randomColor = function() {
  let color = '#'
  let colorArr = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f'
  ]
  for (let i = 0; i < 6; i++) {
    let cur = randomNum(15, 0)
    color += colorArr[cur]
  }
  function randomNum(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  return color
}

export default _utils
