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

export type ShapeType = 'bubble' | 'blob' | 'crater'

export interface IBlobProps {
  [mode: string]: IShapeProps[];
}

type Mode = 'light' | 'dark'

export interface IThemeProps {
  mode: Mode;
  colors: {
      backgroundColor: string;
      homeTitle: string;
      speechBubble: string;
      speechBubbleText: string;
      languageChooser: string;
      anchor: string;
      shapes: string;
  }
}

export interface IThemeProviderProps {
  theme?: IThemeProps;
}

export type IOwnShapeProps = IShapeProps & IThemeProviderProps
export type Languages = 'FR' | 'EN'
