import { Box, Card, Image, Text, Title, Group, Badge, ThemeIcon } from "@mantine/core"

interface Props {
	imageSrc: string
	imageAlt: string
	title: string
	description: string
	badgeText: string
	fitIcons: Function[]
}

export const PresentationCard = ({ imageSrc, imageAlt, title, description, badgeText, fitIcons }: Props) => {
	return (
		<Card shadow="sm" p="lg" radius="md" withBorder sx={{ display: "flex", flexDirection: "column" }}>
			<Card.Section>
				<Image src={imageSrc} height={260} alt={imageAlt} />
			</Card.Section>
			<Group position="apart" mt="lg">
				<Title order={3}>{title}</Title>
			</Group>
			<Text size="sm" color="dimmed" sx={{ marginBottom: "auto" }}>
				{description}
			</Text>
			<Box mt="md">
				<Badge mb="md">{badgeText}</Badge>
				<Group spacing="xs">
					{fitIcons.map((icon) => (
						<ThemeIcon key={icon.name} size="sm">
							{icon()}
						</ThemeIcon>
					))}
				</Group>
			</Box>
		</Card>
	)
}
