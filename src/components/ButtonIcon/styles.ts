import styled from 'styled-components/native'

import { ContainerProps } from './types'

export const Container = styled.TouchableOpacity<ContainerProps>`
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-color: ${({ color, theme }) =>
    color === 'success' ? theme.COLORS.GREEN : theme.COLORS.RED};
  width: ${({ size }) => (size === 'small' ? 40 : 60)}px;
  height: ${({ size }) => (size === 'small' ? 40 : 60)}px;
`
