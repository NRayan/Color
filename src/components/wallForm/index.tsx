import { Control } from "react-hook-form";
import { FormInput } from "../";
import { Container } from "./styles";

export type props =
	{
		visible: boolean,
		wallNumber: number,
		control: Control,
		errors?: any
	}

export function WallForm({ visible, wallNumber, control, errors }: props) {

	return (
		<Container visible={visible}>
			<FormInput label="altura" control={control} name={`height${wallNumber}`} error={errors[`height${wallNumber}`]} />
			<FormInput label="largura" control={control} name={`width${wallNumber}`} error={errors[`width${wallNumber}`]} />
			<FormInput label="quatidade de portas" control={control} name={`doors${wallNumber}`} error={errors[`doors${wallNumber}`]} />
			<FormInput label="quatidade de janelas" control={control} name={`windows${wallNumber}`} error={errors[`windows${wallNumber}`]} />
		</Container>
	);
}