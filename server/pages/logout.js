let router = require("./_router")

router.get("/logout", (ctx) => {
  ctx.logout()
  ctx.redirect("/")
})
