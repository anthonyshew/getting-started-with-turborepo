import { ReactNode, useState } from "react"
import {
	createStyles,
	Header as UiHeader,
	Container,
	Group,
	Burger,
	Paper,
	Title,
	Transition,
	MediaQuery
} from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { TbArrowUpRightCircle } from "@hobby/ui/icons"
import { useTheme } from "@hobby/ui/hooks"

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
		"display": "block",
		"lineHeight": 1,
		"padding": "8px 12px",
		"borderRadius": theme.radius.sm,
		"textDecoration": "none",
		"color": theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.colors.gray[7],
		"fontSize": theme.fontSizes.sm,
		"fontWeight": 500,

		"&:hover": {
			backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0]
		},

		[theme.fn.smallerThan("sm")]: {
			borderRadius: 0,
			padding: theme.spacing.md
		}
	},

	linkActive: {
		"&, &:hover": {
			backgroundColor: theme.fn.variant({ variant: "light", color: theme.primaryColor }).background,
			color: theme.fn.variant({ variant: "light", color: theme.primaryColor }).color
		}
	}
}))

export interface HeaderResponsiveProps {
	links: { link: string; label: string; outbound?: boolean; special?: boolean }[]
	burger?: ReactNode
}

export function Header({ links, burger }: HeaderResponsiveProps) {
	const { push } = useRouter()
	const [opened, { toggle, close }] = useDisclosure(false)
	const [active, setActive] = useState<string | null>(null)
	const { classes, cx } = useStyles()
	const { primaryColor } = useTheme()

	const items = links.map((link) => {
		if (link.outbound) {
			return (
				<a
					key={link.label}
					href={link.link}
					className={cx(classes.link, { [classes.linkActive]: active === link.link })}
					style={{ background: link.special ? primaryColor : undefined, cursor: "pointer" }}
					target="_blank"
					rel="noopener noreferrer"
				>
					{link.label} {link.outbound ? <TbArrowUpRightCircle /> : null}
				</a>
			)
		}

		return (
			<Link key={link.link} href={link.link}>
				<a
					className={cx(classes.link, { [classes.linkActive]: active === link.link })}
					onClick={(event) => {
						event.preventDefault()
						setActive(link.link)
						close()
						push(link.link)
					}}
				>
					{link.label}
				</a>
			</Link>
		)
	})

	return (
		<UiHeader height={HEADER_HEIGHT} className={classes.root}>
			<Container className={classes.header}>
				<Group>
					<Image src="/logo.png" width={42} height={35} alt="HobbyFinder logo" />
					<MediaQuery largerThan="sm" styles={{ fontSize: "2rem" }}>
						<Title sx={{ fontSize: "1rem" }}>HobbyFinder</Title>
					</MediaQuery>
				</Group>
				<Group spacing={5} className={classes.links}>
					{items}
				</Group>

				{burger ? burger : <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />}

				<Transition transition="pop-top-right" duration={200} mounted={opened}>
					{(styles) => (
						<Paper className={classes.dropdown} withBorder style={styles}>
							{items}
						</Paper>
					)}
				</Transition>
			</Container>
		</UiHeader>
	)
}
