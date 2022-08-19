import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { CalculateButton, WallButton, WallForm } from "../";
import { ColorContext } from "../../contexts";
import { calculateCansDemand, calculateTotalSquareMetre, generateWallsValidations, pause, setDefaultValues, yupSetLocale } from "../../utils";
import { Container, ContentContainer, Header } from "./styles";

yupSetLocale();

const walls = [1, 2, 3, 4];
// const walls = [1];
const validationSchema = yup.object(generateWallsValidations(walls));
const formOptions = { resolver: yupResolver(validationSchema) };

export function Form() {

	const { setSquareMetre, setResultStatus, setNeededCans } = useContext(ColorContext);

	const { control, handleSubmit, formState: { errors }, setValue } = useForm(formOptions);

	useEffect(() => setDefaultValues(setValue, walls), []);

	const [selectedWall, setSelectedWall] = useState(1);

	function handleWallButtonClick(wallClicked: number) {
		setSelectedWall(wallClicked);
	}

	function handleCalculateButtonClick(data: object) {
		setResultStatus("loading");
		pause(1000).then(() => {
			const totalSquareMetre = calculateTotalSquareMetre(walls, data);
			const neededCans = calculateCansDemand(totalSquareMetre, [18, 3.6, 2.5, 0.5]);
			setSquareMetre(totalSquareMetre);
			setNeededCans(neededCans);
			setResultStatus("done");
		});

	}

	return (
		<Container>
			<Header>
				{
					walls.map(wallNumber => (
						<WallButton
							key={wallNumber}
							selected={selectedWall == wallNumber}
							wallNumber={wallNumber}
							onClick={handleWallButtonClick}
							errors={errors} />
					))
				}
			</Header>

			<ContentContainer>

				{
					walls.map(wallNumber => (
						<WallForm
							key={wallNumber}
							visible={selectedWall === wallNumber}
							wallNumber={wallNumber}
							control={control}
							errors={errors} />
					))
				}

				<CalculateButton onClick={handleSubmit(handleCalculateButtonClick)} />

			</ContentContainer>
		</Container>
	);
}