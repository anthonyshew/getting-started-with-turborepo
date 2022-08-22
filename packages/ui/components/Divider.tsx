import { Divider as MantineDivider, DividerProps } from "@mantine/core"

interface Props extends DividerProps {
	id?: string
	className?: string
}

export const Divider = ({ id, children, className, ...props }: Props) => {
	return (
		<MantineDivider className={className} {...props}>
			{children}
		</MantineDivider>
	)
}
