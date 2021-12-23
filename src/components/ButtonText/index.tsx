import { TouchableOpacity } from 'react-native'

import { Title } from './styles'
import { ButtonTextProps } from './types'

export default function ButtonText(props: ButtonTextProps) {
  const { title, ...rest } = props
  return (
    <TouchableOpacity activeOpacity={0.7} {...rest}>
      <Title>{title}</Title>
    </TouchableOpacity>
  )
}
