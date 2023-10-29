export interface ITheme {
  name: string;
  properties: any;
}

export const light: ITheme = {
  name: "light",
  properties: {
    "--themecolor": "#049aad",
    "--themecolor-dark": "#048b9c",
    "--themecolor-light": "#009daf38",
  }
};

export const dark: ITheme = {
  name: "dark",
  properties: {
    "--themecolor": "#f5d6cf",
    "--themecolor-dark": "#f43707",
    "--themecolor-light": "#ff5c35",
  }
};
