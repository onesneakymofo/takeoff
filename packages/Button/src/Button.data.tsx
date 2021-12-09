import { CSSObject } from '@emotion/styled'
import tw from 'twin.macro'

// prettier-ignore
export const variants = {
  primary: tw`
    bg-green-700
    text-white
    hover:bg-green-600
    focus-visible:bg-green-600
    active:bg-green-600
    disabled:bg-grey-300
    disabled:text-grey-600

    dark:disabled:bg-grey-800
  `,
  secondary: tw`
    bg-grey-300
    text-black
    hover:bg-grey-200
    focus-visible:bg-grey-200
    active:bg-grey-200
    disabled:opacity-0

    dark:bg-grey-800
    dark:text-white
    dark:hover:bg-grey-700
    dark:focus-visible:bg-grey-700
    dark:active:bg-grey-700
  `,
  ghost: tw`
    bg-transparent
    text-green-700
    hover:bg-green-300
    focus-visible:bg-green-300
    active:bg-green-300
    disabled:bg-transparent
    disabled:text-grey-500

    dark:bg-transparent
    dark:text-white
    dark:hover:bg-green-900
    dark:focus-visible:bg-green-900
    dark:active:bg-green-900
    dark:disabled:bg-transparent
    dark:disabled:text-grey-700
  `,
  focus: tw`
    bg-black
    text-white
    hover:bg-green-800
    focus-visible:bg-green-800
    active:bg-green-700
    disabled:opacity-0

    dark:bg-white
    dark:text-black
    dark:hover:bg-green-400
    dark:focus-visible:bg-green-400
    dark:active:bg-green-300
  `,
  white: tw`
    bg-white
    text-black
    hover:bg-grey-200
    focus-visible:bg-grey-200
    active:bg-grey-200
    disabled:opacity-0

    dark:bg-grey-800
    dark:text-white
    dark:hover:bg-grey-700
    dark:focus-visible:bg-grey-700
    dark:active:bg-grey-700
  `,
}

export const sizes = {
  large: tw`text-label-lg`,
  medium: tw`text-label-md`,
  small: tw`font-bold text-label-sm`,
}
