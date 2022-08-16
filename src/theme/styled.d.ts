import "styled-components";
import { themeProps as MyThemeProps } from ".";

declare module "styled-components" {
    export interface DefaultTheme extends MyThemeProps { }
}