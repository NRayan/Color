import { ThemeProvider } from "styled-components";
import { theme } from "../theme";

export function TestThemeWrapper({ children }: any) {

	return (
		<ThemeProvider theme={theme}>
			{children}
		</ThemeProvider>
	);
}