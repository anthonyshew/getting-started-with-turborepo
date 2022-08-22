import { Title as MantineTitle, TitleProps } from "@mantine/core"

interface Props extends TitleProps {
	id?: string
	className?: string
}

export const Title = ({ id, className, ...props }: Props) => {
	return <MantineTitle className={className} {...props} />
}
