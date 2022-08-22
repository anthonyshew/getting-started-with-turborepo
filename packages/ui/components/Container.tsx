import { Container as MantineContainer, ContainerProps } from "@mantine/core"

interface Props extends ContainerProps {
	id?: string
	className?: string
}

export const Container = ({ id, className, ...props }: Props) => {
	return <MantineContainer id={id} className={className} {...props} />
}
