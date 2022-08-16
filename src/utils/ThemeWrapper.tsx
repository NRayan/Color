import { ThemeProvider } from "styled-components";
import { theme } from "../theme";

export function ThemeWrapper({ children }) {

	return (
		<ThemeProvider theme={theme}>
			{children}
		</ThemeProvider>
	);
}