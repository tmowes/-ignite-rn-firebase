import { Container, Title } from './styles'
import { ButtonProps } from './types'

export default function Button(props: ButtonProps) {
  const { title, ...rest } = props
  return (
    <Container activeOpacity={0.8} {...rest}>
      <Title>{title}</Title>
    </Container>
  )
}
