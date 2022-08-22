const withTM = require("next-transpile-modules")(["@hobby/ui", "@hobby/data"])

module.exports = withTM({
	reactStrictMode: true,
	experimental: {
		images: {
			allowFutureImage: true
		}
	}
})
