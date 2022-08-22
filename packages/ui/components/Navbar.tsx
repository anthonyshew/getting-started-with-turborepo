import { Navbar as MantineNavbar, NavbarProps } from "@mantine/core"

interface Props extends NavbarProps {
	id?: string
	className?: string
}

export const Navbar = ({ id, children, className, ...props }: Props) => {
	return (
		<MantineNavbar className={className} {...props}>
			{children}
		</MantineNavbar>
	)
}
