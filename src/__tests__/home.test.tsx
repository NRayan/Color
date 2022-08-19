import { render } from "@testing-library/react";
import "jest-canvas-mock";
import { Home } from "../pages";
import { ThemeWrapper } from "../utils";

it("Should render page correctly", () => {
	render(
		<ThemeWrapper>
			<Home />
		</ThemeWrapper>
	);

	expect(true).toBeTruthy();
});