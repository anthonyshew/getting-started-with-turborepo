import { useState } from "react"
import Head from "next/head"
import { DimensionsContext, Range } from "../contexts/dimensionRanges"
import { Layout } from "../components/Layout"
import { Results } from "../components/Results"

export default function Web() {
	const [budgetRange, setBudgetRange] = useState<Range>([0, 10])
	const [adventureRange, setAdventureRange] = useState<Range>([0, 10])
	const [socialRange, setSocialRange] = useState<Range>([0, 10])
	const [educationalRange, setEducationalRange] = useState<Range>([0, 10])
	const [exerciseRange, setExerciseRange] = useState<Range>([0, 10])
	const [artRange, setArtRange] = useState<Range>([0, 10])

	return (
		<DimensionsContext.Provider
			value={{
				budget: { range: budgetRange, setRange: setBudgetRange },
				adventure: { range: adventureRange, setRange: setAdventureRange },
				social: { range: socialRange, setRange: setSocialRange },
				educational: { range: educationalRange, setRange: setEducationalRange },
				exercise: { range: exerciseRange, setRange: setExerciseRange },
				art: { range: artRange, setRange: setArtRange }
			}}
		>
			<Head>
				<title>HobbyFinder</title>
				<link rel="icon" href="favicon.ico" />
			</Head>
			<Layout>
				<Results />
			</Layout>
		</DimensionsContext.Provider>
	)
}
