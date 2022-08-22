import { Aside as MantineAside, AsideProps } from "@mantine/core"

interface Props extends AsideProps {
	id?: string
	className?: string
}

export const Aside = ({ id, children, className, ...props }: Props) => {
	return (
		<MantineAside className={className} {...props}>
			{children}
		</MantineAside>
	)
}
