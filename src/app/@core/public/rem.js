import FastClick from 'fastclick'

// 添加fastclick
;
(function (doc, win) {
  if ('addEventListener' in doc) {
    doc.addEventListener(
      'DOMContentLoaded',
      function () {
        FastClick.attach(doc.body)
      },
      false
    )
  }
})(document, window);
(function (doc, win) {
  let docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function () {
      var clientWidth = docEl.clientWidth
      if (!clientWidth) return
      docEl.style.fontSize = 20 * (clientWidth / 320) + 'px'
    }
  if (!doc.addEventListener) return
  win.addEventListener(resizeEvt, recalc, false)
  doc.addEventListener('DOMContentLoaded', recalc, false)
})(document, window)
