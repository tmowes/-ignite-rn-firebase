import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY950};
  justify-content: center;
  align-items: center;
  padding: 24px;
`

export const Title = styled.Text`
  font-size: 40px;
  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
  color: ${({ theme }) => theme.COLORS.ORANGE};
`

export const Subtitle = styled.Text`
  font-size: 18px;
  max-width: 60%;
  text-align: center;
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY300};
  margin-top: 16px;
  margin-bottom: 36px;
`

export const Account = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: 32px;
`
