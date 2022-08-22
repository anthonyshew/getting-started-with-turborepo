
import { SimpleGrid as MantineSimpleGrid, SimpleGridProps } from "@mantine/core"

interface Props extends SimpleGridProps {
	id?: string
	className?: string
}

export const SimpleGrid = ({ id, className, ...props }: Props) => {
	return <MantineSimpleGrid className={className} {...props} />
}
