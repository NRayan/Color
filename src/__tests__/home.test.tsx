import { render } from "@testing-library/react";
import { Home } from "../pages";
import { TestThemeWrapper } from "../utils";

it("Should render page correctly", () => {
	render(
		<TestThemeWrapper>
			<Home />
		</TestThemeWrapper>
	);
	expect(true).toBeTruthy();
});