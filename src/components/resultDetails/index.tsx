import { useContext } from "react";
import { ColorContext } from "../../contexts";
import { Detail, DetailText, Summary } from "./styles";

type props =
	{
		index: number
	}

export function ResultDetails({ index }: props) {

	const { squareMetre } = useContext(ColorContext);

	const detail = `De acordo com as medidas informas, ${squareMetre.toFixed(2)}m² de parede serão pintadas, 
	o que indica que serão necessários ${(squareMetre * .2).toFixed(2)} litros de tinta.`;

	return (
		<Detail index={index} open>
			<Summary>Entenda</Summary>
			<DetailText>{detail}</DetailText>
		</Detail>
	);
}