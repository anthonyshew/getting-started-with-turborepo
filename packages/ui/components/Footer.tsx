import { Footer as MantineFooter, FooterProps } from "@mantine/core"

interface Props extends FooterProps {
	id?: string
	className?: string
}

export const Footer = ({ id, children, className, ...props }: Props) => {
	return (
		<MantineFooter className={className} {...props}>
			{children}
		</MantineFooter>
	)
}
