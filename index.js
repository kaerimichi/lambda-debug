#!/usr/bin/env node

const { readFileSync } = require('fs')
const { join } = require('path')
const [ , , ...params ] = process.argv
const [ functionName, payloadFilePath ] = params
const getServiceData = () => {
  try {
    readFileSync(payloadFilePath)
  } catch (e) {
    return null
  }
}

if (!functionName) {
  process.stderr.write(
    `Usage: ${require('./package').name} [function] <payload-file>\n`
  )
  process.exit(127)
}

module.exports = (async () => {
  try {
    console.log(
      require(
        join(
          process.cwd(), 'functions', functionName)
        ).handler(getServiceData())
    )
  } catch (e) {
    throw e
  }
})()
