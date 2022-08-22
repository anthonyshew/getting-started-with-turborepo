import { MediaQuery as MantineMediaQuery, MediaQueryProps } from "@mantine/core"

interface Props extends MediaQueryProps {
	id?: string
	className?: string
}

export const MediaQuery = ({ id, children, className, ...props }: Props) => {
	return (
		<MantineMediaQuery className={className} {...props}>
			{children}
		</MantineMediaQuery>
	)
}
