import "styled-components";

interface IDefaultTheme {
  colors: {
    primary: string;
    primaryTwo: string;
    secondary: string;
    greyFour: string;
    greyThree: string;
    greyTwo: string;
    greyOne: string;
  };
}

declare module "styled-components" {
  export interface DefaultTheme extends IDefaultTheme {}
}
