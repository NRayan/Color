import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { Home } from "./pages";
import { theme } from "./theme";
import { GlobalStyle } from "./theme/globalStyles";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Home />
		</ThemeProvider>
	</React.StrictMode>
);
