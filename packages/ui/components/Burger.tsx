import { Burger as MantineBurger, BurgerProps } from "@mantine/core"

interface Props extends BurgerProps {
	id?: string
	className?: string
}

export const Burger = ({ id, children, className, ...props }: Props) => {
	return (
		<MantineBurger className={className} {...props}>
			{children}
		</MantineBurger>
	)
}
