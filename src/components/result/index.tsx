import { useContext } from "react";
import Lottie from "react-lottie";
import PaintingAnimationData from "../../assets/paintingLottieAnimation.json";
import { PaintingCanCard, ResultDetails } from "../../components";
import { ColorContext } from "../../contexts";
import { cansOfPaint } from "../../types";
import { Animation, CardsContainer, Container, Title } from "./styles";

const LottieAnimationOptions = {
	loop: true,
	autoplay: true,
	animationData: PaintingAnimationData,
	rendererSettings: { preserveAspectRatio: "xMidYMid slice" }
};

export function Result() {

	const { squareMetre, resultStatus, neededCans } = useContext(ColorContext);

	console.log(squareMetre);

	const message = resultStatus === "waiting" ? "Aguardando os dados" : resultStatus === "loading" ? "Calculando..." : "Você deverá comprar:";

	const cans: cansOfPaint[] | null = resultStatus === "done" ? neededCans.filter(can => can.quantity > 0) : null;

	return (
		<Container>
			<Title>{message}</Title>

			{
				cans ?
					<CardsContainer>
						{
							cans.map((canInfo, index) => <PaintingCanCard key={index} cansInfo={canInfo} index={index} />)
						}

					</CardsContainer>
					:
					<Animation>
						<Lottie options={LottieAnimationOptions}
							height={"100%"}
							width={"100%"}
							speed={.5} />
					</Animation>
			}

			{cans && <ResultDetails index={cans.length} />}
		</Container>
	);
}