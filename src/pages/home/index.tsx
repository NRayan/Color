import Icon from "../../assets/logo.svg";
import { Form, Result } from "../../components";
import { Container, ContentContainer, Logo, Subtitle, Title, TitleContainer } from "./styles";

export function Home() {
	return (
		<Container>
			<Logo src={Icon} alt="logo" />
			<TitleContainer>
				<Title>Vamos pintar ?</Title>
				<Subtitle>calcule a quantidade de latas necessárias<br />para pintar a sua sala</Subtitle>
			</TitleContainer>

			<ContentContainer>
				<Form />
				<Result />
			</ContentContainer>

		</Container>
	);
}