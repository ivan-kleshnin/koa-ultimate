let KoaPassport = require("koa-passport")
let router = require("./_router")

router.get("/auth/github",
  KoaPassport.authenticate("github")
)

router.get("/auth/github/callback",
  KoaPassport.authenticate("github", {
    successRedirect: "/",
    failWithError: true,
  })
)
