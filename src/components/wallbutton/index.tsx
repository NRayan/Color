import { FieldErrorsImpl } from "react-hook-form";
import { Container } from "./styles";

export type props =
	{
		selected: boolean,
		wallNumber: number,
		onClick: (wallNumber: number) => void,
		errors?: FieldErrorsImpl
	}

export function WallButton({ selected, wallNumber, errors, onClick }: props) {

	function checkIfHasErrors(errors): boolean {
		if (!errors || Object.keys(errors).length === 0) return false;
		return !!Object.keys(errors).find(key => key.includes(String(wallNumber)));
	}

	function handleButtonClick(e: any) {
		e.preventDefault();
		onClick(wallNumber);
	}

	return (
		<Container selected={selected} wallNumber={wallNumber} onClick={handleButtonClick} hasError={checkIfHasErrors(errors)}>
			Parede<br />{wallNumber}
		</Container>
	);
}