import React, { CSSProperties } from 'react'
import { theme } from 'twin.macro'

import { SpinLoader } from './LoadSpinner.styles'

export interface LoadSpinnerProps {
  className?: string
  style?: CSSProperties
  color?: string
  size?: number
  alt?: string
}
const DEFAULT_COLOR = theme`colors.gray.d`
//shamelessly stolen: https://loading.io/css/
export function LoadSpinner({
  className = '',
  style,
  color,
  size = 2,
  alt = 'loading',
  ...rest
}: LoadSpinnerProps): JSX.Element {
  // setting DEFAUT_COLOR as a default prop returns string of 'theme`colors.gray.d`'
  // manually create default
  const c = color ? color : DEFAULT_COLOR
  return (
    <SpinLoader className={className} color={c} size={size} style={style} {...rest}>
      <span className="sr-only">{alt}</span>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </SpinLoader>
  )
}
