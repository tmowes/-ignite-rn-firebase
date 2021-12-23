import ButtonIcon from '../ButtonIcon'
import { Container, Info, Name, Path, Options } from './styles'
import { FileProps } from './types'

export default function File(props: FileProps) {
  const { data, onShow, onDelete } = props
  const { name, path } = data
  return (
    <Container>
      <Info>
        <Name>{name}</Name>
        <Path>{path}</Path>
      </Info>

      <Options>
        <ButtonIcon icon="delete" color="alert" onPress={onDelete} />

        <ButtonIcon icon="visibility" onPress={onShow} />
      </Options>
    </Container>
  )
}
