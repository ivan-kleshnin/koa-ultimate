let R = require("ramda")
let UUID = require("uuid/v4")
let Pino = require("pino")

module.exports = function LogMiddleware(opts={}) {
  let logger = opts.logger || Pino({
    name: "app",
    serializers: {
      req: Pino.stdSerializers.req,
      res: Pino.stdSerializers.res,
      err: R.pipe(Pino.stdSerializers.err, R.omit(["status", "statusCode", "expose", "name"])),
    },
    level: opts.level || "trace",
  })
  return async function (ctx, next) {
    ctx.log = logger

    let reqId = UUID()

    let reqMessage = ["development", "testing"].includes(process.env.NODE_ENV)
      ? `me -> ${ctx.request.method} ${ctx.request.url}`
      : `(${reqId}) ${ctx.request.ip} -> ${ctx.request.method} ${ctx.request.url}`
    logger.trace({req: ctx.req}, reqMessage)

    await next()

    let loglevel
    if (ctx.response.status < 400) {
      loglevel = "info"
    } else if (400 <= ctx.response.status && ctx.response.status < 500) {
      loglevel = "warn"
    } else {
      loglevel = "error"
    }

    let resMessage = ["development", "testing"].includes(process.env.NODE_ENV)
      ? `me <- ${ctx.request.method} ${ctx.request.url} ${ctx.response.status}`
      : `(${reqId}) ${ctx.request.ip} <- ${ctx.request.method} ${ctx.request.url} ${ctx.response.status}`
    if (logger.level == "trace" || logger.level == "debug") {
      logger[loglevel]({res: ctx.res, err: ctx.err}, resMessage)
    } else {
      logger[loglevel]({err: ctx.err}, resMessage)
    }
  }
}
