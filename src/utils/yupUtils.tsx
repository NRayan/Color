import * as yup from "yup";

export function yupSetLocale() {
	yup.setLocale({
		mixed: {
			default: "Número inválido",
			required: "Campo obrigatório",
			notType: "Valor inválido"
		},
		number: {
			min: "deve ter no mínimo ${min}m",
			max: "deve ter no máximo ${max}m",
		},
	});
}

export function generateWallsValidations() {

	// const heightValidation(errorMessage:string)
	// {
	// 	const test:yup.BaseSchema=		
	// 	return("heightTest", errorMessage, (value, context) => validateHeight(wallNumber, value, context))
	// }

	function validateHeight(wallNumber, value, context) {

		if (!value) return false;

		const squareMetre = value * (context.parent[`width${wallNumber}`]);
		return (squareMetre >= 1 && squareMetre <= 50);
	}

	const validations = [1, 2, 3, 4].map(wallNumber => (
		{
			[`height${wallNumber}`]: yup.number().required().test("heightTest", "as parede devem conter entre 1 e 50 metros quadrados", (value, context) => validateHeight(wallNumber, value, context)),
			[`width${wallNumber}`]: yup.number().required(),
			[`doors${wallNumber}`]: yup.number().required(),
			[`windows${wallNumber}`]: yup.number().required(),
		}));

	return Object.assign({}, validations[0], validations[1], validations[2], validations[3]);
}