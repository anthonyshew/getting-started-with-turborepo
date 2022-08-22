import { AppProps } from "next/app"
import Head from "next/head"
import { Global, MantineProvider } from "@hobby/ui/components"

export default function App(props: AppProps) {
	const { Component, pageProps } = props

	return (
		<>
			<Head>
				<title>What will you do next? | HobbyFinder App</title>
				<meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
			</Head>

			<MantineProvider
				withGlobalStyles
				withNormalizeCSS
				theme={{
					colorScheme: "light"
				}}
			>
				<Global />
				<Component {...pageProps} />
			</MantineProvider>
		</>
	)
}
