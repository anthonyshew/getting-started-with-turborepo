import { createContext, Dispatch, SetStateAction } from "react"

export type Range = [number, number]
export type Dimension = {
  range: Range
  setRange: Dispatch<SetStateAction<Range>>
}

export type DimensionsContext = {
  budget: Dimension
  adventure: Dimension
  social: Dimension
  educational: Dimension
  exercise: Dimension
  art: Dimension
}

export const DimensionsContext = createContext<DimensionsContext>({} as DimensionsContext)