import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY950};
  align-items: center;
`

export const Content = styled.View`
  width: 270px;
  flex: 1;
  align-items: center;
`

export const UploadInfo = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
`

export const Progress = styled.Text`
  font-size: 40px;
  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
  color: ${({ theme }) => theme.COLORS.GRAY300};
`

export const Transferred = styled.Text`
  font-size: 15px;
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY300};
`
