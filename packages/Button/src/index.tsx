import styled, { CSSObject } from '@emotion/styled'
import React, { ButtonHTMLAttributes, Fragment, PropsWithChildren, useMemo } from 'react'
import tw, { theme } from 'twin.macro'

import { LoadSpinner } from '@onesneakymofo/test-spinner'
import { sizes, variants } from './Button.data'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean
  secondary?: boolean
  ghost?: boolean
  focus?: boolean
  white?: boolean
  large?: boolean
  medium?: boolean
  small?: boolean
  isLoading?: boolean
}

export function Button({
  children,
  primary,
  secondary,
  ghost,
  focus,
  white,
  large,
  medium,
  small,
  isLoading,
  ...restProps
}: PropsWithChildren<ButtonProps>) {
  const variant = useMemo(() => {
    const variant = secondary ? 'secondary' : ghost ? 'ghost' : focus ? 'focus' : white ? 'white' : 'primary'
    return variants[variant]
  }, [secondary, ghost, focus, white])

  const size = useMemo(() => {
    const size = large ? 'large' : small ? 'small' : 'medium'
    return sizes[size]
  }, [large, small])

  return (
    <ButtonStyled size={size} type="button" variant={variant} {...restProps}>
      {isLoading ? (
        <Fragment>
          <LoadSpinner
            className="left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
            color={restProps.disabled ? theme`colors.grey.500` : theme`colors.white.DEFAULT`}
            data-testid="load-spinner"
            style={{ position: 'absolute' }}
          />
          <span className="invisible">loading...</span>
        </Fragment>
      ) : (
        children
      )}
    </ButtonStyled>
  )
}

const ButtonStyled = styled.button<{ variant: CSSObject; size: CSSObject }>`
  ${tw`padding[1em] relative px-6 font-medium leading-100 rounded-lg focus:outline-none disabled:cursor-default`}

  &:active:not(:disabled) {
    transform: scale(0.98);
  }

  ${({ variant }) => variant}
  ${({ size }) => size}
`
