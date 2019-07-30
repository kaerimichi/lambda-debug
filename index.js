const { readFileSync } = require('fs')
const { join } = require('path')
const [ , , ...params ] = process.argv
const [ serviceName, mockFile ] = params
const getServiceData = () => {
  try {
    readFileSync(join(process.cwd(), 'data', `${mockFile}.json`))
  } catch (e) {
    return null
  }
}

if (!serviceName) {
  process.stderr.write(
    `Usage: ${require('./package').name} [function] <mock-file-path>\n`
  )
  process.exit(127)
}

module.exports = (async () => {
  try {
    console.log(
      require(
        join(
          process.cwd(), 'functions', serviceName)
        ).handler(getServiceData)
    )
  } catch (e) {
    throw e
  }
})()
