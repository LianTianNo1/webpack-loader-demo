document.write('hello word')

import mdHtml from './test.md'
const content = document.createElement('div')
content.className = 'content'
content.innerHTML = mdHtml
document.body.appendChild(content)
