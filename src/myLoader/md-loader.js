const { getOptions } = require('loader-utils')
const MarkdownIt = require('markdown-it')
const beautify = require('./beautify')
module.exports = function (source) {
    const options = getOptions(this) || {}
    const md = new MarkdownIt({
        html: true,
        ...options,
    })
    let html = beautify(md.render(source))
    html = `module.exports = ${JSON.stringify(html)}`
    this.callback(null, html)
}
