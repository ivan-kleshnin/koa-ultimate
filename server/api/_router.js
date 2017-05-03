let KoaRouter = require("koa-router")
let ErrorMiddleware = require("../middlewares/error-json")

let router = KoaRouter()

router.use(ErrorMiddleware())

module.exports = router
