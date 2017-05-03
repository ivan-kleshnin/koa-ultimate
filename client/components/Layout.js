let React = require("react");

function Menu(props) {
  return React.createElement(
    "p",
    null,
    React.createElement(
      "a",
      { href: "/" },
      "Home"
    ),
    props.user ? [" | ", React.createElement(
      "a",
      { href: "/account", key: "1" },
      "Account"
    ), " | ", React.createElement(
      "a",
      { href: "/logout", key: "2" },
      "Log Out"
    )] : [" | ", React.createElement(
      "a",
      { href: "/auth/basic", key: "1" },
      "Basic Auth"
    ), " | ", React.createElement(
      "a",
      { href: "/auth/local", key: "2" },
      "Local Auth"
    ), " | ", React.createElement(
      "a",
      { href: "/auth/github", key: "3" },
      "GitHub Auth"
    )]
  );
}

module.exports = function Layout(props) {
  return React.createElement(
    "html",
    null,
    React.createElement(
      "head",
      null,
      React.createElement(
        "title",
        null,
        "Passport Examples"
      )
    ),
    React.createElement(
      "body",
      null,
      React.createElement(Menu, props),
      props.children
    )
  );
};