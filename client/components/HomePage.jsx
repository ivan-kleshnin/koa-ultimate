let React = require("react")
let Layout = require("./Layout")

module.exports = function HomePage(props) {
	return <Layout {...props}>
		<div>
			== Home ==
		</div>
	</Layout>
}
