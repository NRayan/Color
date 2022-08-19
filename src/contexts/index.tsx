import { createContext, ReactNode, useState } from "react";
import { cansOfPaint } from "../types";

type resultStatus = "waiting" | "loading" | "done"

type ColorContextData = {
	resultStatus: resultStatus,
	setResultStatus: (status: resultStatus) => void
	squareMetre: number,
	setSquareMetre: (squareMetre: number) => void,
	neededCans: cansOfPaint[],
	setNeededCans: (cans: cansOfPaint[]) => void
}

type props = {
	children: ReactNode
}

export const ColorContext = createContext({} as ColorContextData);

export function ColorContextProvider({ children }: props) {

	const [resultStatus, setResultStatus] = useState<resultStatus>("waiting");
	const [squareMetre, setSquareMetre] = useState<number>(0);
	const [neededCans, setNeededCans] = useState<cansOfPaint[]>([]);

	return (
		<ColorContext.Provider value={{
			resultStatus: resultStatus,
			setResultStatus: setResultStatus,
			squareMetre: squareMetre,
			setSquareMetre: setSquareMetre,
			neededCans: neededCans,
			setNeededCans: setNeededCans
		}}>
			{children}
		</ColorContext.Provider>
	);
}