import { ReactNode, useState } from "react"
import { createStyles, useTheme } from "@hobby/ui/hooks"
import {
	AppShell,
	Navbar,
	Footer,
	MediaQuery,
	Burger,
	Text,
	Group,
	Stack,
	Header,
	HeaderResponsiveProps,
	Title
} from "@hobby/ui/components"
import { TbArrowUpRightCircle } from "@hobby/ui/icons"
import Link from "next/link"

const HEADER_HEIGHT = 60

const useStyles = createStyles((theme) => ({
	root: {
		position: "sticky",
		zIndex: 999
	},

	dropdown: {
		position: "absolute",
		top: HEADER_HEIGHT,
		left: 0,
		right: 0,
		zIndex: 0,
		borderTopRightRadius: 0,
		borderTopLeftRadius: 0,
		borderTopWidth: 0,
		overflow: "hidden",

		[theme.fn.largerThan("sm")]: {
			display: "none"
		}
	},

	header: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		height: "100%"
	},

	links: {
		[theme.fn.smallerThan("sm")]: {
			display: "none"
		}
	},

	burger: {
		[theme.fn.largerThan("sm")]: {
			display: "none"
		}
	},

	link: {
		"display": "inline-block",
		"lineHeight": 1,
		"padding": "8px 12px",
		"borderRadius": theme.radius.sm,
		"textDecoration": "none",
		"color": theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.colors.gray[7],
		"fontSize": theme.fontSizes.sm,
		"fontWeight": 500,

		"&:hover": {
			backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0]
		}
	},

	linkActive: {
		"&, &:hover": {
			backgroundColor: theme.fn.variant({ variant: "light", color: theme.primaryColor }).background,
			color: theme.fn.variant({ variant: "light", color: theme.primaryColor }).color
		}
	},

	navbarLink: {
		"display": "inline-block",
		"lineHeight": "150%",
		"padding": "8px 12px",
		"borderRadius": theme.radius.sm,
		"textDecoration": "none",
		"color": theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.colors.gray[7],
		"fontSize": theme.fontSizes.sm,
		"fontWeight": 500,

		"&:hover": {
			backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0]
		}
	}
}))

const LINKS: HeaderResponsiveProps["links"] = [
	{
		label: "Marketing Page",
		link: process.env.NODE_ENV === "development" ? "http://localhost:3000" : "https://marketing-hobbyfinder.vercel.app",
		outbound: true
	},
	{
		label: "Try the app!",
		link: process.env.NODE_ENV === "development" ? "http://localhost:3002" : "https://hobbyfinder.vercel.app",
		outbound: true,
		special: true
	}
]

interface Props {
	navLinks: Array<{
		path: string
		title: string
		navbarLabel?: string
		body: string
	}>
	hobbyCount: number
	children: ReactNode
}

export const Layout = ({ navLinks, hobbyCount, children }: Props) => {
	const [opened, setOpened] = useState(false)
	const { classes } = useStyles()
	const { primaryColor, colors } = useTheme()

	return (
		<AppShell
			navbarOffsetBreakpoint="sm"
			asideOffsetBreakpoint="sm"
			navbar={
				<Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }}>
					<Stack spacing="xs">
						<MediaQuery largerThan="sm" styles={{ display: "none" }}>
							<Stack>
								<Title order={2}>Customer Pages</Title>
								<div>
									{LINKS.map((link) => {
										return (
											<a
												key={link.label}
												href={link.link}
												className={classes.link}
												style={{ background: link.special ? primaryColor : undefined, cursor: "pointer" }}
												target="_blank"
												rel="noopener noreferrer"
											>
												{link.label} {link.outbound ? <TbArrowUpRightCircle /> : null}
											</a>
										)
									})}
								</div>
							</Stack>
						</MediaQuery>
						<Title order={2}>Doc Pages</Title>
						{navLinks.map((link) => {
							return (
								<Link key={link.path} href={link.path}>
									<a className={classes.navbarLink}>{link.navbarLabel ?? link.title}</a>
								</Link>
							)
						})}
					</Stack>
				</Navbar>
			}
			footer={
				<Footer height={60} p="md">
					<Group position="apart">
						<Text align="left">Hobby Count: {hobbyCount}</Text>
						<Text align="right">▲ Vercel</Text>
					</Group>
				</Footer>
			}
			header={
				<Header
					links={LINKS}
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
