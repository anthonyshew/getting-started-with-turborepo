import {
	Slider as MantineSlider,
	SliderProps as MantineSliderProps,
	RangeSlider as MantineRangeSlider,
	RangeSliderProps as MantineRangeSliderProps
} from "@mantine/core"

interface SliderProps extends MantineSliderProps {
	id?: string
	className?: string
}

export const Slider = ({ id, className, ...props }: SliderProps) => {
	return <MantineSlider id={id} className={className} {...props} />
}

interface RangeSliderProps extends MantineRangeSliderProps {
	id?: string
	className?: string
}

export const RangeSlider = ({ id, className, ...props }: RangeSliderProps) => {
	return <MantineRangeSlider id={id} className={className} {...props} />
}
