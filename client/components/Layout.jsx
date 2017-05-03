let React = require("react")

function Menu(props) {
  return <p>
    <a href="/">Home</a>
    {(props.user
      ? [
          " | ",
          <a href="/account" key="1">Account</a>,
          " | ",
          <a href="/logout" key="2">Log Out</a>
        ]
      : [
          " | ",
          <a href="/auth/basic" key="1">Basic Auth</a>,
          " | ",
          <a href="/auth/local" key="2">Local Auth</a>,
          " | ",
          <a href="/auth/github" key="3">GitHub Auth</a>,
        ]
    )}
  </p>
}

module.exports = function Layout(props) {
  return <html>
    <head>
      <title>Passport Examples</title>
    </head>
    <body>
      <Menu {...props}/>
      {props.children}
    </body>
  </html>
}
