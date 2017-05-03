let React = require("react")
let ReactServer = require("react-dom/server")
let router = require("./_router")

router.get("/logout", (ctx) => {
  ctx.logout()
  ctx.redirect("/")
})
