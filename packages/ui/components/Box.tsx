import { Box as MantineBox, BoxProps } from "@mantine/core"

interface Props extends BoxProps {
	id?: string
	className?: string
}

export const Box = ({ id, children, className, ...props }: Props) => {
	return (
		<MantineBox className={className} {...props}>
			{children}
		</MantineBox>
	)
}
