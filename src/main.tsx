import React from "react";
import ReactDOM from "react-dom/client";
import { BackgroundBlobs } from "./components";
import { Home } from "./pages";
import { GlobalStyle } from "./theme/globalStyles";
import { ThemeWrapper } from "./utils";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<BackgroundBlobs />
		<ThemeWrapper>
			<GlobalStyle />
			<Home />
		</ThemeWrapper>
	</React.StrictMode>
);
