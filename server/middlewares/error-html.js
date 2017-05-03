let R = require("ramda")
let FS = require("fs")
let HTTP = require("http")
let Path = require( "path")

let pages = R.reduce((memo, code) => {
  let filePath = Path.join(Path.resolve("public", "errors"), code + ".html")
  return R.assoc(code, FS.readFileSync(filePath, "utf-8").toString(), memo)
}, {}, ["404", "500"]) // ["400", "401", "403", "404", "410", "500", "503"])

module.exports = function HTMLErrorMiddleware(opts={}) {
  return async function (ctx, next) {
    try {
      await next()
    } catch (err) {
      ctx.err = err
      ctx.response.type = "text/html"
      ctx.response.status = err.status || 500
      ctx.response.body = pages[String(ctx.status)] || HTTP.STATUS_CODES[ctx.status] || ctx.status
    }
  }
}

