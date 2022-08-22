import { ThemeIcon as MantineThemeIcon, ThemeIconProps } from "@mantine/core"

interface Props extends ThemeIconProps {
	id?: string
	className?: string
}

export const ThemeIcon = ({ id, className, ...props }: Props) => {
	return <MantineThemeIcon className={className} {...props} />
}
