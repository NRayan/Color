import { canSize, cansOfPaint } from "../types";
import { DOOR_SIZE, WINDOW_SIZE } from "./values";

export function calculateTotalSquareMetre(walls: number[], data): number {

	let totalArea = 0;

	walls.forEach(wallNumber => {
		const {
			[`width${wallNumber}`]: width,
			[`height${wallNumber}`]: height,
			[`doors${wallNumber}`]: doors,
			[`windows${wallNumber}`]: windows } = data;

		totalArea += calculateWallArea(height, width, doors, windows);
	});

	return totalArea;
}

function calculateWallArea(height, width, doors, windows) {
	const wallSquareMetre = height * width;
	const doorsArea = doors * DOOR_SIZE.area;
	const windowsArea = windows * WINDOW_SIZE.area;
	return (wallSquareMetre - (doorsArea + windowsArea));
}

export function calculateCansDemand(totalSquareMetre: number, canSize: canSize[]) {
	//Cada litro de tinta pinta 5m2. Logo, cada 0.2l de tinta, pinta 1m2
	const neededLiters = totalSquareMetre * 0.2;
	const initalDemandObject = {};
	canSize.forEach(size => { initalDemandObject[size] = 0; });
	const cansDemand = getCanDemand(canSize, neededLiters, initalDemandObject);
	const cans = getCansDemandFromDemandObject(cansDemand);
	return cans;
}

function getCanDemand(canSize: canSize[], litersRemaining: number, computedCans) {
	//Verifica se vai faltar algum litro de tinta (pode sobrar, mas faltar, não)
	if (litersRemaining <= 0) {
		return computedCans;
	}
	else {
		const bigestPossibleCanSize = getBigestPossibleCanSize(canSize, litersRemaining);
		const newCansValue = { ...computedCans, [`${bigestPossibleCanSize}`]: computedCans[`${bigestPossibleCanSize}`] + 1 };
		return getCanDemand(canSize, (litersRemaining - bigestPossibleCanSize), newCansValue);
	}
}

function getBigestPossibleCanSize(canSize: canSize[], litersRemaining: number) {
	// Retorna a maior lata de tinta possivel. Porem, Caso todas sejam menores que os litros necessarios, é retornado a menor 
	const biggercanSize = canSize.filter(size => size < litersRemaining);
	if (biggercanSize.length > 0)
		return Math.max(...biggercanSize);
	else
		return Math.min(...canSize);
}

function getCansDemandFromDemandObject(demandObject): cansOfPaint[] {
	const cans: cansOfPaint[] = Object.entries(demandObject).map(canDemand => {
		const quantity = typeof (canDemand[1]) === "number" ? canDemand[1] : 0;
		const demand: cansOfPaint = { size: parseFloat(canDemand[0]) as canSize, quantity: quantity };
		return demand;
	});

	return cans;
}