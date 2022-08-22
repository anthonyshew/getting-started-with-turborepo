import { Avatar, Text, Button, Paper } from "@mantine/core"

interface AvatarCardProps {
	avatar: string
	name: string
	purpose: string
	actionText: string
	actionIsLink?: boolean
	outboundLink?: string
}

export function AvatarCard({ avatar, name, purpose, actionText, actionIsLink, outboundLink }: AvatarCardProps) {
	return (
		<Paper
			radius="md"
			withBorder
			p="lg"
			sx={(theme) => ({
				width: "300px",
				backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white
			})}
		>
			<Avatar src={avatar} size={120} radius={120} mx="auto" />
			<Text align="center" size="lg" weight={500} mt="md">
				{name}
			</Text>
			<Text align="center" color="dimmed" size="sm">
				{purpose}
			</Text>
			<Button
				component={actionIsLink ? "a" : "button"}
				href={actionIsLink ? outboundLink : undefined}
				target={actionIsLink ? "_blank" : undefined}
				rel={actionIsLink ? "noopener noreferrer" : undefined}
				variant="default"
				fullWidth
				mt="md"
			>
				{actionText}
			</Button>
		</Paper>
	)
}
