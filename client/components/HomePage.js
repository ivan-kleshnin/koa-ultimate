let React = require("react");
let Layout = require("./Layout");

module.exports = function HomePage(props) {
	return React.createElement(
		Layout,
		props,
		React.createElement(
			"div",
			null,
			"== Home =="
		)
	);
};