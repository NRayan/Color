import { Container } from "./styles";

type props = { onClick: () => void }

export function CalculateButton({ onClick }: props) {
	return (
		<Container onClick={onClick}>
			{"calcular >"}
		</Container>
	);
}