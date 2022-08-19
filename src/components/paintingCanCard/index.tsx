import { cansOfPaint } from "../../types";
import { Container, Label } from "./styles";

type props =
	{
		cansInfo: cansOfPaint
	}

export function PaintingCanCard({ cansInfo }: props) {
	return (
		<Container>
			<Label>{`${cansInfo.quantity} lata${cansInfo.quantity >= 2 ? "s" : ""} de ${cansInfo.size}L`}</Label>
		</Container>
	);
}