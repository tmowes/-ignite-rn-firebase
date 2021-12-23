import firestore from '@react-native-firebase/firestore'

import ButtonIcon from '../ButtonIcon'
import { Container, Info, Title, Quantity, Options } from './styles'
import { ProductProps } from './types'

export default function Product({ data }: ProductProps) {
  const { id, description, quantity, done } = data

  const toggleDone = () => {
    firestore().collection('products').doc(id).update({
      done: !done,
    })
  }

  const deleteProduct = () => {
    firestore().collection('products').doc(id).delete()
  }

  return (
    <Container>
      <Info>
        <Title done={done}>{description}</Title>

        <Quantity>Quantidade: {quantity}</Quantity>
      </Info>

      <Options>
        <ButtonIcon icon={done ? 'undo' : 'check'} onPress={toggleDone} />

        <ButtonIcon icon="delete" color="alert" onPress={deleteProduct} />
      </Options>
    </Container>
  )
}
