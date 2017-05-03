let router = require("./_router")

router.get("/", (ctx) => {
  ctx.render("HomePage", {user: ctx.state.user})
})
