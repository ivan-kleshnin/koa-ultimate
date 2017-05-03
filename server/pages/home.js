let React = require("react")
let ReactServer = require("react-dom/server")
let router = require("./_router")
let HomePage = require("../../client/components/HomePage")

router.get("/", (ctx) => {
  ctx.type = "html"
  ctx.response.body = ReactServer.renderToStaticMarkup(
    React.createElement(HomePage, {user: ctx.state.user})
  )
})
