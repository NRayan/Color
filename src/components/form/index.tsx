import { useState } from "react";
import { CalculateButton, FormInput, WallButton } from "../";
import { Container, ContentContainer, Header, InputsContainer } from "./styles";

export function Form() {

	const [selected, setSelected] = useState(1);

	function handleClick(wallClicked: number) {
		setSelected(wallClicked);
	}

	return (
		<Container>
			<Header>
				<WallButton selected={selected == 1} wallNumber={1} onClick={handleClick} />
				<WallButton selected={selected == 2} wallNumber={2} onClick={handleClick} />
				<WallButton selected={selected == 3} wallNumber={3} onClick={handleClick} />
				<WallButton selected={selected == 4} wallNumber={4} onClick={handleClick} />
			</Header>

			<ContentContainer>

				<InputsContainer>
					<FormInput label="metragem (m2)" />
					<FormInput label="quatidade de portas" />
					<FormInput label="quatidade de janelas" />
				</InputsContainer>

				<CalculateButton />

			</ContentContainer>
		</Container>
	);
}