import { MaterialIcons } from '@expo/vector-icons'

import { Container } from './styles'
import theme from '../../styles/theme'
import { ButtonIconProps } from './types'

export default function ButtonIcon(props: ButtonIconProps) {
  const { color = 'success', size = 'small', icon, ...rest } = props
  return (
    <Container activeOpacity={0.8} color={color} size={size} {...rest}>
      <MaterialIcons
        name={icon}
        size={size === 'small' ? 18 : 24}
        color={theme.COLORS.WHITE}
      />
    </Container>
  )
}
