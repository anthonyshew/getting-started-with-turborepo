import { GetStaticProps, InferGetStaticPropsType } from "next"
import { pages } from "@hobby/data/docs"
import { hobbies } from "@hobby/data/hobbies"
import { PageContent } from "../components/PageContent"
import { Layout } from "../components/Layout"

export default function AppShellDemo({ pageData, count }: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<Layout navLinks={Object.values(pages)} hobbyCount={count}>
			<PageContent {...pageData} />
		</Layout>
	)
}

export const getStaticPaths = () => {
	const paths = Object.entries(pages)
		.filter((page) => page[0] !== "/") // Filter out home page
		.map((page) => ({ params: { path: page[1].path } }))

	return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps<{
	pageData: { path: string; title: string; body: string; navbarLabel?: string }
	count: number
}> = ({ params }) => {
	const pageData = pages[params?.path as keyof typeof pages]
	const count = Object.keys(hobbies).length

	return {
		props: {
			pageData,
			count
		}
	}
}
