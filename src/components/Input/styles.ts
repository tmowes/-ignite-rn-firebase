import styled, { css } from 'styled-components/native'

import { InputProps } from './types'

export const TextInput = styled.TextInput<InputProps>`
  max-height: 60px;
  height: 60px;
  background-color: ${({ theme }) => theme.COLORS.GRAY500};
  border-radius: 5px;
  padding-left: 12px;
  margin-bottom: 12px;
  color: ${({ theme }) => theme.COLORS.GRAY100};

  ${({ size }) =>
    size === 'small' &&
    css`
      width: 60px;
      height: 60px;
      text-align: center;
      padding: 0;
    `};

  ${({ size }) =>
    size === 'medium' &&
    css`
      flex: 1;
    `};

  ${({ size }) =>
    size === 'large' &&
    css`
      width: 100%;
    `};
`
