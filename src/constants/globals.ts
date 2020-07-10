import { Languages, IBlobProps } from "../interfaces";
import { lightBlobsProps, darkBlobsProps } from "./shapes";

export const languages: Languages[] = ['FR', 'EN']

export const blobProps: IBlobProps = {
  'light': lightBlobsProps,
  'dark': darkBlobsProps,
}

export const purple: string = '#280E3E'
export const white: string = '#FFF'
export const dark: string = '#000'