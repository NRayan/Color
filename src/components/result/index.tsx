import { PaintingCanCard } from "../../components";
import { CardsContainer } from "../paintingCanCard/styles";
import { Container, Title } from "./styles";
export function Result() {
	return (
		<Container>
			<Title>Aguardando os dados...</Title>

			<CardsContainer>
				<PaintingCanCard />
				<PaintingCanCard />
				<PaintingCanCard />
				<PaintingCanCard />
			</CardsContainer>
		</Container>
	);
}