import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { CalculateButton, WallButton, WallForm } from "../";
import { Container, ContentContainer, Header } from "./styles";

yup.setLocale({
	mixed: {
		default: "Número inválido",
		required: "Campo obrigatório"
	},
	number: {
		min: "deve ter no mínimo ${min}m",
		max: "deve ter no máximo ${max}m",
	}
});

const validations = [1, 2, 3, 4].map(num => (
	{
		[`height${num}`]: yup.number().required(),
		[`width${num}`]: yup.number().required(),
		[`doors${num}`]: yup.number().required(),
		[`windows${num}`]: yup.number().required(),
	}));

const validationSchema = yup.object(Object.assign({}, validations[0], validations[1], validations[2], validations[3]));

const formOptions = { resolver: yupResolver(validationSchema) };

export function Form() {

	const { control, handleSubmit, formState: { errors } } = useForm(formOptions);

	const [selectedWall, setSelectedWall] = useState(1);

	function handleClick(wallClicked: number) {
		setSelectedWall(wallClicked);
	}

	function handleValidateClick(data: any) {
		console.log(data);
	}

	return (
		<Container>
			<Header>
				<WallButton selected={selectedWall == 1} wallNumber={1} onClick={handleClick} />
				<WallButton selected={selectedWall == 2} wallNumber={2} onClick={handleClick} />
				<WallButton selected={selectedWall == 3} wallNumber={3} onClick={handleClick} />
				<WallButton selected={selectedWall == 4} wallNumber={4} onClick={handleClick} />
			</Header>

			<ContentContainer>

				{
					[1, 2, 3, 4].map(wallNumber => (
						<WallForm
							key={wallNumber}
							visible={selectedWall === wallNumber}
							wallNumber={wallNumber}
							control={control}
							errors={errors} />
					))
				}

				<CalculateButton onClick={handleSubmit(handleValidateClick)} />

			</ContentContainer>
		</Container>
	);
}