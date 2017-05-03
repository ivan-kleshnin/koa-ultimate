let React = require("react")
let ReactServer = require("react-dom/server")
let router = require("./_router")
let AccountPage = require("../../client/components/AccountPage")

router.get("/account", (ctx) => {
  ctx.type = "html"
  ctx.response.body = ReactServer.renderToStaticMarkup(
    React.createElement(AccountPage, {user: ctx.state.user})
  )
})
