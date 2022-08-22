import { useState, ReactNode } from "react"
import { useTheme } from "@hobby/ui/hooks"
import { AppShell, Navbar, Footer, MediaQuery, Burger, Title, Text, Header, Divider } from "@hobby/ui/components"
import { RangeSelectors } from "./RangeSelectors"

export const Layout = ({ children }: { children: ReactNode }) => {
	const [opened, setOpened] = useState(false)
	const { colors } = useTheme()

	return (
		<AppShell
			navbarOffsetBreakpoint="sm"
			asideOffsetBreakpoint="sm"
			navbar={
				<Navbar
					p="md"
					pb="xl"
					hiddenBreakpoint="sm"
					hidden={!opened}
					width={{ sm: 200, lg: 300 }}
					sx={{ overflowY: "auto" }}
				>
					<Title order={2}>Dimensions</Title>
					<Text color="dimmed" mt="xs">
						Use the sliders to give us a range of preferences for your new hobbies.
					</Text>
					<Divider mt="lg" />
					<RangeSelectors />
				</Navbar>
			}
			footer={
				<Footer height={60} p="md">
					<Text align="right">▲ Powered by Vercel</Text>
				</Footer>
			}
			header={
				<Header
					links={[]}
					burger={
						<MediaQuery largerThan="sm" styles={{ display: "none" }}>
							<Burger opened={opened} onClick={() => setOpened((o) => !o)} size="sm" color={colors.gray[6]} mr="xl" />
						</MediaQuery>
					}
				/>
			}
		>
			{children}
		</AppShell>
	)
}
