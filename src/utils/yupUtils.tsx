import { UseFormSetValue } from "react-hook-form";
import * as yup from "yup";

const errorMessages =
	[
		"As parede devem conter entre 1 e 50 metros quadrados",
		"Paredes com portas devem ter, no mínimo, 2,2m",
		"O total de área das portas e janelas deve ser no máximo 50% da área de parede, com as medidas informas, este total ocuparia ",
	];

export function yupSetLocale() {
	yup.setLocale({
		mixed: {
			default: "Número inválido",
			required: "Campo obrigatório",
			notType: "Valor inválido"
		},
		number: {
			min: "Deve ser positivo",
			positive: "Deve ser positivo"
		},
	});
}

export function setDefaultValues(setValue: UseFormSetValue<any>, walls: number[]) {
	walls.forEach(wallNumber => {
		setValue(`height${wallNumber}`, 0);
		setValue(`width${wallNumber}`, 0);
		setValue(`doors${wallNumber}`, 0);
		setValue(`windows${wallNumber}`, 0);
	});
}

export function generateWallsValidations(walls: number[]) {

	const validations = walls.map(wallNumber => (
		{
			[`height${wallNumber}`]: yup.number().min(0).required(),
			[`width${wallNumber}`]: yup.number().min(0).required(),
			[`doors${wallNumber}`]: yup.number().min(0).required(),
			[`windows${wallNumber}`]: yup.number().min(0).required(),
			[`other${wallNumber}`]: yup.mixed().notRequired()
				.test("SquareMetre", errorMessages[0], validateSquareMetre)
				.test("WallWithDoor", errorMessages[1], validateWallWithDoorHeight)
				.test(validateDoorsAndWindowsArea)
		}));

	return Object.assign({}, validations[0], validations[1], validations[2], validations[3]);
}

function validateSquareMetre(value, context: yup.TestContext) {
	const { height, width, valideWallSizes } = getPropertiesInContext(context);
	if (width === undefined || height === undefined) return true;
	return valideWallSizes;
}

function validateDoorsAndWindowsArea(value, context: yup.TestContext) {
	const { height, width, doors, windows, squareMetre } = getPropertiesInContext(context);
	if (!width || !height) return true;
	if (doors === undefined || windows === undefined) return true;

	const doorsArea = doors * (2 * 1.2);
	const windowsArea = windows * (0.8 * 1.9);
	const doorsAndWindowsArea = doorsArea + windowsArea;

	if (doorsAndWindowsArea > 0.5 * squareMetre) {
		const ocupedArea = ((doorsAndWindowsArea * 100) / squareMetre).toFixed(2);
		return context.createError({
			path: context.path,
			message: `${errorMessages[2]} ${ocupedArea}%`
		});
	} else return true;

}

function validateWallWithDoorHeight(value, context: yup.TestContext) {
	const { height, doors } = getPropertiesInContext(context);
	if (!height) return true;
	if (!doors) return true;

	return (height >= 2.2);
}

function getPropertiesInContext(context) {
	const wallNumber = context.path.slice(-1);
	const { [`width${wallNumber}`]: width, [`height${wallNumber}`]: height, [`doors${wallNumber}`]: doors, [`windows${wallNumber}`]: windows } = context.parent;
	const squareMetre = width * height;
	const valideWallSizes = (squareMetre >= 1 && squareMetre <= 50);
	return { wallNumber, width, height, squareMetre, valideWallSizes, doors, windows };
}