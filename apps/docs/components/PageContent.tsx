import { Title } from "@hobby/ui/components"

interface Props {
	path: string
	title: string
	body: string
	navbarLabel?: string
}

export const PageContent = ({ title, body }: Props) => {
	return (
		<>
			<Title order={2} sx={{ fontSize: "2.5rem" }}>
				{title}
			</Title>
			<div dangerouslySetInnerHTML={{ __html: body }} />
		</>
	)
}
