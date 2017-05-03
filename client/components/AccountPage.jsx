let React = require("react")
let Layout = require("./Layout")

module.exports = function AccountPage(props) {
  return <Layout {...props}>
    <div>
      <p>ID: {props.user.id}</p>
      <p>Username: {props.user.username}</p>
    </div>
  </Layout>
}
