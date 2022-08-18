import { useContext } from "react";
import Lottie from "react-lottie";
import PaintingAnimationData from "../../assets/paintingLottieAnimation.json";
import { PaintingCanCard } from "../../components";
import { ColorContext } from "../../contexts";
import { CardsContainer } from "../paintingCanCard/styles";
import { Animation, Container, Title } from "./styles";

const LottieAnimationOptions = {
	loop: true,
	autoplay: true,
	animationData: PaintingAnimationData,
	rendererSettings: { preserveAspectRatio: "xMidYMid slice" }
};

export function Result() {

	const { squareMetre, resultStatus } = useContext(ColorContext);

	console.log(squareMetre);

	const message = resultStatus === "waiting" ? "Aguardando os dados" : resultStatus === "loading" ? "Calculando..." : "Você deverá comprar";

	return (
		<Container>
			<Title>{message}</Title>

			{
				resultStatus === "done" ?
					<CardsContainer>
						<PaintingCanCard />
						<PaintingCanCard />
						<PaintingCanCard />
						<PaintingCanCard />
					</CardsContainer>
					:
					<Animation>
						<Lottie options={LottieAnimationOptions}
							height={"100%"}
							width={"100%"}
							speed={.5}/>
					</Animation>
			}


			{/* <h2>{squareMetre}</h2> */}
		</Container>
	);
}