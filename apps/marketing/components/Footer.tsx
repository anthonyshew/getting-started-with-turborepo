import { createStyles, Container, Group, Text } from "@mantine/core"
import Image from "next/future/image"

const useStyles = createStyles((theme) => ({
	footer: {
		marginTop: 120,
		borderTop: `1px solid ${theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]}`
	},

	inner: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		paddingTop: theme.spacing.xl,
		paddingBottom: theme.spacing.xl,

		[theme.fn.smallerThan("xs")]: {
			flexDirection: "column"
		}
	},

	links: {
		[theme.fn.smallerThan("xs")]: {
			marginTop: theme.spacing.md
		}
	}
}))

export function Footer() {
	const { classes } = useStyles()

	return (
		<div className={classes.footer}>
			<Container className={classes.inner}>
				<Image src="/logo.png" width={42} height={35} />
				<Group spacing={0} className={classes.links} position="right" noWrap>
					<Text>▲ Powered by Vercel</Text>
				</Group>
			</Container>
		</div>
	)
}
