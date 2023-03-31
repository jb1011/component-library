import React from 'react'
import styled from 'styled-components'
import { space, color, typography, SpaceProps, ColorProps, TypographyProps } from 'styled-system'

interface ButtonProps extends SpaceProps, ColorProps, TypographyProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'tertiary'
}

const ButtonBase = styled.button<ButtonProps>`
  ${space}
  ${color}
  ${typography}
  border: none;
  border-radius: 8px;
  padding: ${({ theme, variant }) => {
    if (variant === 'secondary') return `${theme.space[2]} ${theme.space[4]}`;
    if (variant === 'tertiary') return `${theme.space[1]} ${theme.space[3]}`;
    return `${theme.space[3]} ${theme.space[5]}`;
  }};
  cursor: pointer;
  background-color: ${({ theme, variant }) => {
    if (variant === 'secondary') return theme.colors.secondary;
    if (variant === 'tertiary') return 'transparent';
    return theme.colors.primary;
  }};
  color: ${({ theme, variant }) => {
    if (variant === 'secondary') return theme.colors.primary;
    if (variant === 'tertiary') return theme.colors.secondary;
    return theme.colors.white;
  }};
  :hover {
    opacity: 0.8;
  }
`

const Button = ({ children, variant = 'primary', ...props }: ButtonProps) => (
  <ButtonBase variant={variant} {...props}>
    {children}
  </ButtonBase>
)

export default Button