let KoaPassport = require("koa-passport")
let React = require("react")
let ReactServer = require("react-dom/server")
let router = require("./_router")
let LoginPage = require("../../client/components/LoginPage")

router.get("/auth/local", (ctx) => {
  ctx.response.status = 200
  ctx.response.body = ReactServer.renderToStaticMarkup(
    React.createElement(LoginPage, {user: ctx.state.user})
  )
})

router.post("/auth/local",
  KoaPassport.authenticate("local", {
    successRedirect: "/",
    failWithError: true,
  })
)
