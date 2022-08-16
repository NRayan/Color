import { Container, Input, Label } from "./styles";

type props =
	{
		label: string,
	}

export function FormInput({ label }: props) {
	return (
		<Container>
			<Label>{label}</Label>
			<Input />
		</Container>
	);
}