let R = require("ramda")
let FS = require("fs")
let HTTP = require("http")
let Path = require( "path")

module.exports = function JSONErrorMiddleware(opts={}) {
  return async function (ctx, next) {
    try {
      await next()
    } catch (err) {
      ctx.err = err
      ctx.response.type = "application/json"
      ctx.response.status = err.status || 500
      ctx.response.body = {error: HTTP.STATUS_CODES[ctx.status]}
    }
  }
}

