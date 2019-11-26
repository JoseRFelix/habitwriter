import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      main: string;
      text: string;
      background: string;
    };
    font: {
      text: string;
      heading: string;
    };
  }
}
