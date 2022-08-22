import { Stack as MantineStack, StackProps } from "@mantine/core"

interface Props extends StackProps {
	id?: string
	className?: string
}

export const Stack = ({ id, children, className, ...props }: Props) => {
	return (
		<MantineStack className={className} {...props}>
			{children}
		</MantineStack>
	)
}
