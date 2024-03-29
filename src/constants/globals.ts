import { Languages, IBlobProps, ShapeType } from "../interfaces";
import { LIGHT_BLOBS, DARK_BLOBS } from "./shapes";

export const LANGUAGES: Languages[] = ['FR', 'EN']

export const BLOB_PROPS: IBlobProps = {
  'light': LIGHT_BLOBS,
  'dark': DARK_BLOBS,
} as const

export const BUBBLE_TYPE: ShapeType = 'bubble'
export const BLOB_TYPE: ShapeType = 'blob'
export const CRATER_TYPE: ShapeType = 'crater'

export const PURPLE: string = '#280E3E'
export const WHITE: string = '#FFF'
export const DARK: string = '#000'