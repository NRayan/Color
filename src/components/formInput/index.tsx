import { Control, Controller } from "react-hook-form";
import { Container, ErrorLabel, Input, Label, LabelContainer } from "./styles";

type props =
	{
		label: string,
		name: string,
		control: Control;
		error?: any | undefined
	}

export function FormInput({ label, control, name, error }: props) {

	return (
		<Container>
			<LabelContainer>
				<Label>{label}</Label>
				{
					error &&
					<ErrorLabel>{error.message}</ErrorLabel>
				}

			</LabelContainer>
			<Controller
				name={name}
				control={control}
				render={({ field: { onChange, value } }) =>
					(
						<Input value={value} onChange={onChange} hasError={!!error} />
					)} />

		</Container>
	);
}