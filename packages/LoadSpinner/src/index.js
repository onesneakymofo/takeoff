import React, { CSSProperties } from 'react'
import { theme } from 'twin.macro'

import { LoadSpinnerStyles } from './LoadSpinnerStyles'

const DEFAULT_COLOR = theme`colors.green.500`
//shamelessly stolen: https://loading.io/css/
export const LoadSpinner = ({
  className = '',
  style,
  color,
  size = 2,
  alt = 'loading',
  ...rest
}) => {
  const c = color ? color : DEFAULT_COLOR
  return (
    <LoadSpinnerStyles className={className} color={c} size={size} style={style} {...rest}>
      <span className="sr-only">{alt}</span>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </LoadSpinnerStyles>
  )
}
