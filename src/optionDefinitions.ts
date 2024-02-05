//command line options
//if you want to support more args on the command line, add them here
//see also: https://www.npmjs.com/package/command-line-args
export default [
    { name: 'amount', alias: 'a', type: Number },
    { name: 'currency', alias: 'c', type: String, defaultValue: 'USD'}
]