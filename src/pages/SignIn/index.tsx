import auth from '@react-native-firebase/auth'

import Button from '../../components/Button'
import ButtonText from '../../components/ButtonText'
import Input from '../../components/Input'
import { Container, Account, Title, Subtitle } from './styles'

export default function SignIn() {
  const loginAnonymously = async () => {
    const { user } = await auth().signInAnonymously()
    console.log(user)
  }

  return (
    <Container>
      <Title>MyShopping</Title>
      <Subtitle>monte sua lista de compra te ajudar nas compras</Subtitle>

      <Input placeholder="e-mail" />

      <Input placeholder="senha" keyboardType="email-address" />

      <Button title="Entrar" onPress={() => null} />

      <Account>
        <ButtonText title="Recuperar senha" onPress={() => null} />
        <ButtonText title="Criar minha conta" onPress={() => null} />
      </Account>
    </Container>
  )
}
