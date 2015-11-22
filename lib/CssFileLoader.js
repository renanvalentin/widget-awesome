module.exports = {
  load: function (id, url) {
    var css = null
    var head = document.getElementsByTagName('head')[0]
    if (document.getElementById(id)) return
    css = document.createElement('link')
    css.id = id
    css.href = url
    css.rel = 'stylesheet'
    head.appendChild(css)
  }
}
