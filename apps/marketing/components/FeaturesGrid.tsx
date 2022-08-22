import { ThemeIcon, Text, Title, Container, SimpleGrid } from "@hobby/ui/components"
import { createStyles, useTheme } from "@hobby/ui/hooks"
import { iconDictionary } from "@hobby/ui/icons"

export const DATA = [
	{
		icon: iconDictionary.budget,
		title: "Budget",
		description: "Don't want to spend a dime? We've got you covered."
	},
	{
		icon: iconDictionary.adventure,
		title: "Adventure",
		description: "Want to go outside? Let's see what's out there."
	},
	{
		icon: iconDictionary.social,
		title: "Social",
		description: "Interact with others or enjoy yourself."
	},
	{
		icon: iconDictionary.educational,
		title: "Educational",
		description: "Trying to expand the mind? Let's learn."
	},
	{
		icon: iconDictionary.exercise,
		title: "Exercise",
		description: "Heart racing to couch surfing, we've got it"
	},
	{
		icon: iconDictionary.artsiness,
		title: "Artsiness",
		description: "Want to train that magic touch? Let's create."
	}
]

interface FeatureProps {
	icon: Function
	title: React.ReactNode
	description: React.ReactNode
}

export function Feature({ icon, title, description }: FeatureProps) {
	const theme = useTheme()
	return (
		<div>
			<ThemeIcon variant="light" size={40} radius={40}>
				{icon()}
			</ThemeIcon>
			<Text style={{ marginTop: theme.spacing.sm, marginBottom: 7 }}>{title}</Text>
			<Text size="sm" color="dimmed" style={{ lineHeight: 1.6 }}>
				{description}
			</Text>
		</div>
	)
}

const useStyles = createStyles((theme) => ({
	wrapper: {
		paddingTop: theme.spacing.xl * 4,
		paddingBottom: theme.spacing.xl * 4
	},

	title: {
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
		fontWeight: 900,
		marginBottom: theme.spacing.md,
		textAlign: "center",

		[theme.fn.smallerThan("sm")]: {
			fontSize: 28,
			textAlign: "left"
		}
	},

	description: {
		textAlign: "center",

		[theme.fn.smallerThan("sm")]: {
			textAlign: "left"
		}
	}
}))

interface FeaturesGridProps {
	title: React.ReactNode
	description: React.ReactNode
	data?: FeatureProps[]
}

export function FeaturesGrid({ title, description, data = DATA }: FeaturesGridProps) {
	const { classes, theme } = useStyles()
	const features = data.map((feature, index) => <Feature {...feature} key={index} />)

	return (
		<Container id="features" className={classes.wrapper}>
			<Title className={classes.title}>{title}</Title>

			<Container size={560} p={0}>
				<Text size="sm" className={classes.description}>
					{description}
				</Text>
			</Container>

			<SimpleGrid
				mt={60}
				cols={3}
				spacing={theme.spacing.xl * 2}
				breakpoints={[
					{ maxWidth: 980, cols: 2, spacing: "xl" },
					{ maxWidth: 755, cols: 1, spacing: "xl" }
				]}
			>
				{features}
			</SimpleGrid>
		</Container>
	)
}
