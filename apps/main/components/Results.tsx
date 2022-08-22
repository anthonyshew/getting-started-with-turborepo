import { useContext } from "react"
import { DimensionsContext } from "../contexts/dimensionRanges"
import { Container, PresentationCard, SimpleGrid, Title } from "@hobby/ui/components"
import { hobbies } from "@hobby/data/hobbies"
import { iconDictionary } from "@hobby/ui/icons"

export const Results = () => {
	const { adventure, art, budget, educational, exercise, social } = useContext(DimensionsContext)

	const resultsArr = hobbies
		.sort((a, b) => a.name.localeCompare(b.name))
		.map((hobby) => {
			const hobbyWithFits: typeof hobby & { fits: Array<keyof typeof hobby.dimensions>; fitsNum: number } = {
				...hobby,
				fits: [],
				fitsNum: 0
			}

			const handleFit = (hob: typeof hobby, dimension: keyof typeof hobby.dimensions, range: [number, number]) => {
				if (hob.dimensions[dimension] >= range[0] && hob.dimensions[dimension] <= range[1]) {
					hobbyWithFits.fits.push(dimension)
					hobbyWithFits.fitsNum++
				}
			}

			handleFit(hobby, "adventure", adventure.range)
			handleFit(hobby, "artsiness", art.range)
			handleFit(hobby, "budget", budget.range)
			handleFit(hobby, "educational", educational.range)
			handleFit(hobby, "exercise", exercise.range)
			handleFit(hobby, "social", social.range)

			return hobbyWithFits
		})
		.filter((hobby) => hobby.fitsNum !== 0)
		.sort((a, b) => b.fitsNum - a.fitsNum)

	return (
		<Container sx={{ maxWidth: 1200 }}>
			<Title align="center" mb="xl">
				Your Results
			</Title>
			<SimpleGrid
				breakpoints={[
					{ minWidth: 0, cols: 1 },
					{ minWidth: "sm", cols: 2 },
					{ minWidth: "md", cols: 3 }
				]}
			>
				{resultsArr.map((hobby) => {
					return (
						<PresentationCard
							key={hobby.name}
							imageSrc={hobby.image}
							description={hobby.description}
							imageAlt={hobby.name}
							title={hobby.name}
							badgeText={`Fits: ${hobby.fitsNum}`}
							fitIcons={hobby.fits.map((fit) => iconDictionary[fit])}
						/>
					)
				})}
			</SimpleGrid>
		</Container>
	)
}
