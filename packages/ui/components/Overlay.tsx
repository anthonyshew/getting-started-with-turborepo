import { Overlay as MantineOverlay, OverlayProps } from "@mantine/core"

interface Props extends OverlayProps {
	id?: string
	className?: string
}

export const Overlay = ({ id, className, ...props }: Props) => {
	return <MantineOverlay className={className} {...props} />
}
