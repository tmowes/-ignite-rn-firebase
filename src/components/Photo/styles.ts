import styled from 'styled-components/native'

export const Container = styled.View`
  width: 270px;
  height: 270px;
  margin-top: 32px;
  margin-bottom: 12px;
`

export const EmptyPhotoContainer = styled.View`
  width: 270px;
  height: 270px;
  border-width: 3px;
  border-radius: 5px;
  border-color: ${({ theme }) => theme.COLORS.GRAY400};
  border-style: dashed;
  justify-content: center;
  align-items: center;
`

export const Image = styled.Image`
  width: 270px;
  height: 270px;
  border-radius: 5px;
`

export const EmptyPhotoText = styled.Text`
  font-size: 18px;
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY400};
  text-align: center;
  padding: 16px;
`
