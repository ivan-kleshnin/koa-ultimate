let Koa = require("koa")
let KoaMount = require("koa-mount")
let KoaStatic = require("koa-static")
let KoaBody = require("koa-body")
let KoaSession = require("koa-session")
let KoaPassport = require("koa-passport")
let LogMiddleware = require("./middlewares/log")
let TimeMiddleware = require("./middlewares/time")
let pageRouter = require("./pages/_router")
let apiRouter = require("./api/_router")
require("./env")
require("./passport")
require("./routes")

let app = new Koa()
app.keys = ["whatever"]
app.silent = true

app.use(KoaMount("/public", KoaStatic("./public")))
app.use(LogMiddleware({level: process.env.LOG_LEVEL}))
app.use(TimeMiddleware())
app.use(KoaBody())
app.use(KoaSession(app))
app.use(KoaPassport.initialize())
app.use(KoaPassport.session())
app.use(pageRouter.routes())
app.use(pageRouter.allowedMethods())
app.use(apiRouter.routes())
app.use(apiRouter.allowedMethods())

module.exports = app
