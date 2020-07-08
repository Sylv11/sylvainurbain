export interface IPosition {
  top?: string;
  left?: string;
  bottom?: string;
  right?: string;
}
export interface IShapeProps {
  size: number;
  position: IPosition;
  speed?: number;
  animated?: boolean;
  src?: string;
  alt?: string;
}
export interface IThemeProps {
  mode: string;
  colors: {
      background: string;
  }
}
export interface IThemeProviderProps {
  theme?: IThemeProps;
}
