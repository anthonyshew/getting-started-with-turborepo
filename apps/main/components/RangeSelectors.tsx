import { useContext } from "react"
import { Box, Title, RangeSlider, Stack, ThemeIcon, Group, Divider } from "@hobby/ui/components"
import { iconDictionary } from "@hobby/ui/icons"
import { createStyles } from "@hobby/ui/hooks"
import { DimensionsContext } from "../contexts/dimensionRanges"

const useStyles = createStyles(({ spacing, fontSizes }) => ({
	label: {
		fontSize: fontSizes.lg
	},
	labelGroup: {
		marginBottom: spacing.lg
	}
}))

export const RangeSelectors = () => {
	const { classes } = useStyles()
	const { budget, adventure, art, educational, exercise, social } = useContext(DimensionsContext)

	return (
		<Stack mt="xl" spacing="xl">
			<Box>
				<Group position="left" className={classes.labelGroup}>
					<ThemeIcon>{iconDictionary.budget({})}</ThemeIcon>
					<Title order={2} className={classes.label}>
						Budget
					</Title>
				</Group>
				<RangeSlider value={budget.range} onChange={budget.setRange} minRange={0} max={10} />
			</Box>
			<Divider />
			<Box>
				<Group position="left" className={classes.labelGroup}>
					<ThemeIcon>{iconDictionary.adventure({})}</ThemeIcon>
					<Title order={2} className={classes.label}>
						Adventure
					</Title>
				</Group>
				<RangeSlider value={adventure.range} onChange={adventure.setRange} minRange={0} max={10} />
			</Box>
			<Divider />
			<Box>
				<Group position="left" className={classes.labelGroup}>
					<ThemeIcon>{iconDictionary.social({})}</ThemeIcon>
					<Title order={2} className={classes.label}>
						Social
					</Title>
				</Group>
				<RangeSlider value={social.range} onChange={social.setRange} minRange={0} max={10} />
			</Box>
			<Divider />
			<Box>
				<Group position="left" className={classes.labelGroup}>
					<ThemeIcon>{iconDictionary.educational({})}</ThemeIcon>
					<Title order={2} className={classes.label}>
						Educational
					</Title>
				</Group>
				<RangeSlider value={educational.range} onChange={educational.setRange} minRange={0} max={10} />
			</Box>
			<Divider />
			<Box>
				<Group position="left" className={classes.labelGroup}>
					<ThemeIcon>{iconDictionary.exercise({})}</ThemeIcon>
					<Title order={2} className={classes.label}>
						Exercise
					</Title>
				</Group>
				<RangeSlider value={exercise.range} onChange={exercise.setRange} minRange={0} max={10} />
			</Box>
			<Divider />
			<Box>
				<Group position="left" className={classes.labelGroup}>
					<ThemeIcon>{iconDictionary.artsiness({})}</ThemeIcon>
					<Title order={2} className={classes.label}>
						Art
					</Title>
				</Group>
				<RangeSlider value={art.range} onChange={art.setRange} minRange={0} max={10} />
			</Box>
		</Stack>
	)
}
