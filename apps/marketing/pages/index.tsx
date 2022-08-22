import { FeaturesGrid } from "../components/FeaturesGrid"
import { Header } from "@hobby/ui/components"
import { Hero } from "../components/Hero"
import { Footer } from "../components/Footer"
import { TechCards } from "../components/TechCards"
import Head from "next/head"
import { hobbies } from "@hobby/data/hobbies"
import { GetStaticProps, InferGetStaticPropsType } from "next"

const HEADER_LINKS = [
	{
		label: "Features",
		link: "#features"
	},
	{
		label: "About",
		link: "#about"
	},
	{
		label: "Documentation",
		link: process.env.NODE_ENV === "development" ? "http://localhost:3001" : "https://docs-hobbyfinder.vercel.app",
		outbound: true
	},
	{
		label: "Try it out",
		link: process.env.NODE_ENV === "development" ? "http://localhost:3002" : "https://hobbyfinder.vercel.app",
		outbound: true,
		special: true
	}
]

export default function Web({ hobbyCount }: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<div>
			<Head>
				<title>HobbyFinder</title>
				<link rel="icon" href="favicon.ico" />
			</Head>
			<Header links={HEADER_LINKS} />
			<Hero hobbyCount={Math.floor(hobbyCount / 10) * 10} />
			<FeaturesGrid
				title="What's your next pastime?"
				description="Tell us what you want your new hobby to look like and we'll recommend some options."
			/>
			<TechCards />
			<Footer />
		</div>
	)
}

export const getStaticProps: GetStaticProps<{
	hobbyCount: number
}> = () => {
	const hobbyCount = Object.keys(hobbies).length

	return {
		props: {
			hobbyCount
		}
	}
}
