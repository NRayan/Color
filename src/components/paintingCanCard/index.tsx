import { cansOfPaint } from "../../types";
import { Container, Label } from "./styles";

type props =
	{
		cansInfo: cansOfPaint,
		index: number
	}

export function PaintingCanCard({ cansInfo,index }: props) {
	return (
		<Container index={index}>
			<Label>{`${cansInfo.quantity} lata${cansInfo.quantity >= 2 ? "s" : ""} de ${cansInfo.size}L`}</Label>
		</Container>
	);
}