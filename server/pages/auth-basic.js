let KoaPassport = require("koa-passport")
let router = require("./_router")

router.get("/auth/basic",
  KoaPassport.authenticate("basic", {
    successRedirect: "/",
    failWithError: true,
  })
)
