# Lambda Debug

A veeeeery simple tool to debug AWS Lambda functions locally.

## Installation

```
$ npm i -g https://github.com/kaerimichi/lambda-debug
```

## Usage

Put your functions in the "functions" folder and your mock data in the "data" folder as a JSON file and:

```
$ lambda-debug [function] <payload-file>
```

## Example

```
exports.handler = event => {
  return 'I am a AWS Lambda example!'
}
```
