import { AppShell as MantineAppShell, AppShellProps, useMantineTheme } from "@mantine/core"

interface Props extends AppShellProps {
	id?: string
	className?: string
}

export const AppShell = ({ id, children, className, ...props }: Props) => {
	const { spacing } = useMantineTheme()

	return (
		<MantineAppShell
			className={className}
			styles={{
				main: {
					paddingTop: spacing.md
				}
			}}
			{...props}
		>
			{children}
		</MantineAppShell>
	)
}
