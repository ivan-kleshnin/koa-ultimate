let KoaPassport = require("koa-passport")
let router = require("./_router")

router.get("/auth/twitter",
  KoaPassport.authenticate("twitter")
)

router.get("/auth/twitter/callback",
  KoaPassport.authenticate("twitter", {
    successRedirect: "/",
    failWithError: true,
  })
)
