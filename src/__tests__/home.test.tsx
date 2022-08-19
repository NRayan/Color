import { render } from "@testing-library/react";
import { Home } from "../pages";
import { ThemeWrapper } from "../utils";
import "jest-canvas-mock";

it("Should render page correctly", () => {
	render(
		<ThemeWrapper>
			<Home />
		</ThemeWrapper>
	);

	expect(true).toBeTruthy();
});