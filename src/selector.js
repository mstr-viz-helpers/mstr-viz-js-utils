export function replaceSpans (domNode, className, replaceValue) {
  var spans = domNode.getElementsByClassName(className)
  for (var i = 0; i < spans.length; i++) {
    spans[i].innerHTML = replaceValue
  }
}

export function getSelectorValue (d) {
  const map = new Map()
  map.set('key', 'value')
  if (typeof d.getSelectedItems === 'function') {
    return d.getSelectedItems().map(function (el) { return el.n }).join(', ')
  }
  if (typeof d.getSelectedItem === 'function') {
    return d.getSelectedItem().n
  }
  return undefined
}
