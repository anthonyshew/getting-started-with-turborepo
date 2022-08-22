import { Button as MantineButton, ButtonProps } from "@mantine/core"

interface Props extends ButtonProps {
	id?: string
	disabled?: boolean
	onClick?: Function
	className?: string
}

export const Button = ({ id, children, onClick, className, ...props }: Props) => {
	return (
		<MantineButton className={className} onClick={(e: any) => onClick && onClick(e)} {...props}>
			{children}
		</MantineButton>
	)
}
