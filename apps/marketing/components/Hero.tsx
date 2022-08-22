import { LinkButton, Container, Title, Text } from "@hobby/ui/components"
import { createStyles } from "@hobby/ui/hooks"

const useStyles = createStyles((theme) => ({
	hero: {
		background:
			"linear-gradient(0deg, hsla(210, 11%, 15%, 1) 0%, hsla(132, 52%, 35%, 1) 33%, hsla(132, 52%, 35%, 1) 67%, hsla(210, 11%, 15%, 1) 100%)"
	},

	container: {
		height: 700,
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-end",
		alignItems: "flex-start",
		paddingBottom: theme.spacing.xl * 6,
		zIndex: 1,
		position: "relative",

		[theme.fn.smallerThan("sm")]: {
			height: 500,
			paddingBottom: theme.spacing.xl * 3
		}
	},

	title: {
		color: theme.white,
		fontSize: 60,
		fontWeight: 900,
		lineHeight: 1.1,

		[theme.fn.smallerThan("sm")]: {
			fontSize: 40,
			lineHeight: 1.2
		},

		[theme.fn.smallerThan("xs")]: {
			fontSize: 28,
			lineHeight: 1.3
		}
	},

	description: {
		color: theme.white,
		maxWidth: 600,

		[theme.fn.smallerThan("sm")]: {
			maxWidth: "100%",
			fontSize: theme.fontSizes.sm
		}
	},

	control: {
		marginTop: theme.spacing.xl * 1.5,

		[theme.fn.smallerThan("sm")]: {
			width: "100%"
		}
	}
}))

interface Props {
	hobbyCount: number
}

export function Hero({ hobbyCount }: Props) {
	const { classes } = useStyles()

	return (
		<div className={classes.hero}>
			<Container className={classes.container}>
				<Title className={classes.title}>Find a new hobby today.</Title>
				<Text className={classes.description} size="xl" mt="xl">
					No matter your preferences, we will find you a new way to pass the time. From sky diving to knitting, everyone
					can find new fun.
				</Text>

				<Text mt="sm">With over {hobbyCount} hobbies to explore, we have something for everyone.</Text>

				<LinkButton
					href={process.env.NODE_ENV === "development" ? "http://localhost:3002" : "https://hobbyfinder.vercel.app"}
					external
					variant="white"
					size="xl"
					radius="xl"
					className={classes.control}
				>
					Get started
				</LinkButton>
			</Container>
		</div>
	)
}
