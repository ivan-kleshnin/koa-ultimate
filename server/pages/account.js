let React = require("react")
let ReactServer = require("react-dom/server")
let router = require("./_router")

router.get("/account", (ctx) => {
  ctx.render("AccountPage", {user: ctx.state.user})
})
