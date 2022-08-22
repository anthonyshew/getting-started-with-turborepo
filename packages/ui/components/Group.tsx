import { Group as MantineGroup, GroupProps } from "@mantine/core"

interface Props extends GroupProps {
	id?: string
	className?: string
}

export const Group = ({ id, className, ...props }: Props) => {
	return <MantineGroup className={className} {...props} />
}
