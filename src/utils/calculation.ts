import { DOOR_SIZE, WINDOW_SIZE } from "./values";

export function calculateTotalArea(walls: number[], data): number {

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