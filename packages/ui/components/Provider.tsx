import { Global as MantineGlobal, MantineProvider as MantineLibProvider, MantineProviderProps } from "@mantine/core"

export const MantineProvider = ({ children, ...props }: MantineProviderProps) => {
	return (
		<MantineLibProvider
			withNormalizeCSS
			{...props}
			theme={{
				primaryColor: "green",
				colorScheme: "dark"
			}}
		>
			{children}
		</MantineLibProvider>
	)
}

export const Global = () => {
	return (
		<MantineGlobal
			styles={() => {
				return {
					html: {
						overflowX: "hidden",
						scrollBehavior: "smooth"
					}
				}
			}}
		/>
	)
}
