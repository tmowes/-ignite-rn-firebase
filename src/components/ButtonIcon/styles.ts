import styled from 'styled-components/native'

import theme from '../../styles/theme'
import { ContainerProps } from './types'

const colors = {
  success: theme.COLORS.GREEN,
  alert: theme.COLORS.RED,
  default: 'transparent',
}

export const Container = styled.TouchableOpacity<ContainerProps>`
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-color: ${({ color }) => colors[color]};
  width: ${({ size }) => (size === 'small' ? 40 : 60)}px;
  height: ${({ size }) => (size === 'small' ? 40 : 60)}px;
`
