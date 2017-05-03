let KoaPassport = require("koa-passport")
let router = require("./_router")

router.get("/auth/facebook",
  KoaPassport.authenticate("facebook")
)

router.get("/auth/facebook/callback",
  KoaPassport.authenticate("facebook", {
    successRedirect: "/",
    failWithError: true,
  })
)
