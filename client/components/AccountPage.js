let React = require("react");
let Layout = require("./Layout");

module.exports = function AccountPage(props) {
  return React.createElement(
    Layout,
    props,
    React.createElement(
      "div",
      null,
      React.createElement(
        "p",
        null,
        "ID: ",
        props.user.id
      ),
      React.createElement(
        "p",
        null,
        "Username: ",
        props.user.username
      )
    )
  );
};