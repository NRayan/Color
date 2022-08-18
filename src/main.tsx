import React from "react";
import ReactDOM from "react-dom/client";
import { ColorContextProvider } from "./contexts";
import { Home } from "./pages";
import { GlobalStyle } from "./theme/globalStyles";
import { ThemeWrapper } from "./utils";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<ColorContextProvider>
			<ThemeWrapper>
				<GlobalStyle />
				<Home />
			</ThemeWrapper>
		</ColorContextProvider>
	</React.StrictMode>
);
