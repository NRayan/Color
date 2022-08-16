import { Container } from "./styles";

export type props =
	{
		selected: boolean,
		wallNumber: number,
		onClick: (wallNumber: number) => void
	}

export function WallButton({ selected, wallNumber, onClick }: props) {

	function handleButtonClick(e: any) {
		e.preventDefault();
		onClick(wallNumber);
	}

	return (
		<Container selected={selected} wallNumber={wallNumber} onClick={handleButtonClick}>
			Parede<br />{wallNumber}
		</Container>
	);
}