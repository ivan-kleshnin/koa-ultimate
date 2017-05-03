let KoaPassport = require("koa-passport")
let router = require("./_router")

router.get("/auth/local", (ctx) => {
  ctx.render("LoginPage", {user: ctx.state.user})
})

router.post("/auth/local",
  KoaPassport.authenticate("local", {
    successRedirect: "/",
    failWithError: true,
  })
)
