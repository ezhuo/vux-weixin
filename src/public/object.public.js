let _object = {}

/**
 * 判断类型
 * @param {*} o
 */
_object.typeCheck = function(o) {
  var s = Object.prototype.toString.call(o)
  return s.match(/\[object (.*?)\]/)[1].toLowerCase()
}
/**
 * 在_object上绑定一些类型检测
 */
;[
  'Null',
  'Undefined',
  'Object',
  'Array',
  'String',
  'Number',
  'Boolean',
  'Function',
  'RegExp'
].forEach(function(t) {
  _object['is' + t] = function(o) {
    return _object.typeCheck(o) === t.toLowerCase()
  }
})

/**
 * 判断字符串为JSON
 * @param str
 * @returns {boolean}
 */
_object.isJson = function(str) {
  if (typeof str == 'string') {
    try {
      if (str.indexOf('{') > -1) {
        JSON.parseEx(str)
        return true
      } else {
        return false
      }
    } catch (e) {
      console.log(e)
      return false
    }
  }
  return false
}

/**
 * 判断是否是图片JSON格式
 * @param str
 * @returns {boolean}
 */
_object.isImagesJson = function(str) {
  if (typeof str == 'string') {
    try {
      if (str.indexOf('{') > -1 && str.indexOf('lastModifiedDate') > -1) {
        return true
      } else {
        return false
      }
    } catch (e) {
      console.log(e)
      return false
    }
  }
  return false
}

/**
 * 判断对象是否为空
 * @param obj
 * @returns {number}
 */
_object.isObjectEmpty = function(obj) {
  if (obj) {
    for (let prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        return false
      }
    }
  }
  return true
}

//是否存在指定函数
_object.isExitsFunction = function(funcName) {
  try {
    if (typeof eval(funcName) == 'function') {
      return true
    }
  } catch (e) {}
  return false
}

//是否存在指定变量
_object.isExitsVariable = function(variableName) {
  try {
    if (typeof variableName == 'undefined') {
      //alert("value is undefined");
      return false
    } else {
      //alert("value is true");
      return true
    }
  } catch (e) {}
  return false
}

//判断参数是否为NULL
_object.isNull = function(arg, newValue) {
  arg = arg == 'null' ? null : arg
  if (newValue == null) return arg == null
  else return arg == null ? newValue : arg
}

export default _object
