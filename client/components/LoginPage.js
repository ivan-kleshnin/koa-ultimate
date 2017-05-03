let React = require("react");
let Layout = require("./Layout");

module.exports = function LoginPage(props) {
  return React.createElement(
    Layout,
    props,
    React.createElement(
      "form",
      { method: "POST" },
      "Username: ",
      React.createElement("input", { name: "username" }),
      "Password: ",
      React.createElement("input", { name: "password" }),
      React.createElement("input", { type: "submit" })
    )
  );
};