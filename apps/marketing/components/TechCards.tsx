import { Group, AvatarCard, Title, Text, Container } from "@hobby/ui/components"

export const TechCards = () => {
	return (
		<Container id="about">
			<Title>About</Title>
			<Text mt={16} mb={32}>
				HobbyFinder is built on the web&apos;s modern stack. Here are the key technologies we leverage to bring you this
				experience.
			</Text>
			<Group position="center">
				<AvatarCard
					avatar="https://pbs.twimg.com/profile_images/1413266054755799048/5--sdMZ8_400x400.jpg"
					name="Turborepo"
					purpose="Monorepo manager"
					actionText="Learn More"
					actionIsLink={true}
					outboundLink="https://turborepo.org"
				/>
				<AvatarCard
					avatar="https://pbs.twimg.com/profile_images/1468045715083509767/JrehsCpb_400x400.png"
					name="Next.js"
					purpose="React framework"
					actionText="Learn More"
					actionIsLink={true}
					outboundLink="https://nextjs.org"
				/>

				<AvatarCard
					avatar="https://pbs.twimg.com/profile_images/1252531684353998848/6R0-p1Vf_400x400.jpg"
					name="Vercel"
					purpose="Deployment platform"
					actionText="Learn More"
					actionIsLink={true}
					outboundLink="https://vercel.com"
				/>
				<AvatarCard
					avatar="https://pbs.twimg.com/profile_images/1384763585742704642/TJa1rkqk_400x400.jpg"
					name="Mantine"
					purpose="Component library"
					actionText="Learn more"
					actionIsLink={true}
					outboundLink="https://mantine.dev"
				/>
			</Group>
		</Container>
	)
}
