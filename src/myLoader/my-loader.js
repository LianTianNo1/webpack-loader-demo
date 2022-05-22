const loaderUtils = require('loader-utils')
module.exports = function (source) {
    // 获取到用户给当前 Loader 传入的 options
    const options = loaderUtils.getOptions(this)
    // console.log('options-->', options)
    // 在这里按照你的需求处理 source
    return source.replace('word', ', I am Xiaolang')
}
