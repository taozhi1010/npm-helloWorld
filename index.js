const minimist = require('minimist')

module.exports = () => {
    // slice(2) 删除前两个参数，因为第一个参数是解释器，第二个参数是文件名
    const args = minimist(process.argv.slice(2));
    console.log(args);
}