import { Text as MantineText, TextProps } from "@mantine/core"

interface Props extends TextProps {
	id?: string
	className?: string
}

export const Text = ({ id, className, ...props }: Props) => {
	return <MantineText className={className} {...props} />
}
