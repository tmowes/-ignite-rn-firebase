import { TextInputProps } from 'react-native'

export type InputProps = TextInputProps & {
  size?: 'small' | 'medium' | 'large'
}
