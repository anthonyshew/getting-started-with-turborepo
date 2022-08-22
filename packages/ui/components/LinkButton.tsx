import { Button as MantineButton, ButtonProps } from "@mantine/core"

interface Props extends ButtonProps {
	id?: string
	disabled?: boolean
	href: string
	onClick?: Function
	className?: string
	external: boolean
}

export const LinkButton = ({ id, children, onClick, className, href, external, ...props }: Props) => {
	return (
		<MantineButton
			component="a"
			target={external ? "_blank" : undefined}
			rel={external ? "noopener noreferrer" : undefined}
			href={href}
			className={className}
			onClick={(e: any) => onClick && onClick(e)}
			{...props}
		>
			{children}
		</MantineButton>
	)
}
