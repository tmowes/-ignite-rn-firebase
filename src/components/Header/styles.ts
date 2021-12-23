import styled from 'styled-components/native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

import { ContainerProps } from './types'

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 72px;
  background-color: ${({ theme }) => theme.COLORS.ORANGE};

  flex-direction: ${({ showLogoutButton }) => (showLogoutButton ? 'row' : 'column')};
  align-items: center;
  justify-content: ${({ showLogoutButton }) =>
    showLogoutButton ? 'space-around' : 'center'};
`

export const Title = styled.Text`
  font-size: 20px;
  text-transform: uppercase;
  font-weight: bold;
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
  margin-top: ${getStatusBarHeight()}px;
`
