import theme from '../../styles/theme'
import { TextInput } from './styles'
import { InputProps } from './types'

export default function Input(props: InputProps) {
  const { size = 'large', ...rest } = props
  return <TextInput placeholderTextColor={theme.COLORS.GRAY200} size={size} {...rest} />
}
