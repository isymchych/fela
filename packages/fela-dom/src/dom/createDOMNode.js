/* @flow */
function getDocumentHead(): Object {
  return document.head || {}
}

export default function createDOMNode(
  type: string,
  anchorNode?: Object,
  media?: string = '',
  support?: boolean = false
): Object {
  const head = getDocumentHead()

  const node = document.createElement('style')
  node.setAttribute('data-fela-type', type)
  node.type = 'text/css'

  if (support) {
    node.setAttribute('data-fela-support', true)
  }

  if (media.length > 0) {
    node.media = media
    head.appendChild(node)
  } else {
    // if anchorNode is undefined it will
    // be added at the end by default
    head.insertBefore(node, anchorNode)
  }

  return node
}
