let React = require("react")
let Layout = require("./Layout")

module.exports = function LoginPage(props) {
  return <Layout {...props}>
    <form method="POST">
      Username: <input name="username"/>
      Password: <input name="password"/>
      <input type="submit"/>
    </form>
  </Layout>
}

