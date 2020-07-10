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

export interface IBlobProps {
  [mode: string]: IShapeProps[];
}

type Mode = 'light' | 'dark'

export interface IThemeProps {
  mode: Mode;
  colors: {
      background: string;
      homeTitle: string;
      speechBubble: string;
      speechBubbleText: string;
      languageChooser: string;
      anchor: string;
      shapes: string;
  },
  other: {
    blobOpacity: string;
  }
}

export interface IThemeProviderProps {
  theme?: IThemeProps;
}

export type IOwnShapeProps = IShapeProps & IThemeProviderProps
export type Languages = 'FR' | 'EN'
