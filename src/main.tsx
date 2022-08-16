import React from "react";
import ReactDOM from "react-dom/client";
import { Home } from "./pages";
import { GlobalStyle } from "./theme/globalStyles";
import { ThemeWrapper } from "./utils";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<ThemeWrapper>
			<GlobalStyle />
			<Home />
		</ThemeWrapper>
	</React.StrictMode>
);
