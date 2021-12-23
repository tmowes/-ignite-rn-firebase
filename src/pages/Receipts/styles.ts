import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY950};
  align-items: center;
`

export const PhotoInfo = styled.Text`
  font-size: 12px;
  color: ${({ theme }) => theme.COLORS.GRAY200};
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
`
