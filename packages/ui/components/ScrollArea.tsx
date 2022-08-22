import { ScrollArea as MantineScrollArea, ScrollAreaProps } from "@mantine/core"

interface Props extends ScrollAreaProps {
	id?: string
	className?: string
}

export const ScrollArea = ({ id, children, className, ...props }: Props) => {
	return (
		<MantineScrollArea className={className} {...props}>
			{children}
		</MantineScrollArea>
	)
}
