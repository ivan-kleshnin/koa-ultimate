let KoaRouter = require("koa-router")
let ErrorMiddleware = require("../middlewares/error-html")

let router = KoaRouter()

router.use(ErrorMiddleware())

module.exports = router
