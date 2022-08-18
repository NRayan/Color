import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { CalculateButton, WallButton, WallForm } from "../";
import { generateWallsValidations, setDefaultValues, yupSetLocale } from "../../utils";
import { Container, ContentContainer, Header } from "./styles";

yupSetLocale();

const walls = [1, 2, 3, 4];
// const walls = [1];
const validationSchema = yup.object(generateWallsValidations(walls));
const formOptions = { resolver: yupResolver(validationSchema) };

export function Form() {

	const { control, handleSubmit, formState: { errors }, setValue } = useForm(formOptions);

	useEffect(() => setDefaultValues(setValue, walls), []);

	const [selectedWall, setSelectedWall] = useState(1);

	function handleWallButtonClick(wallClicked: number) {
		setSelectedWall(wallClicked);
	}

	function handleCalculateButtonClick(data: any) {
		console.log(data);
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