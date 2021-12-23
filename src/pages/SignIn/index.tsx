import { useState } from 'react'
import { Alert } from 'react-native'

import auth from '@react-native-firebase/auth'

import Button from '../../components/Button'
import ButtonText from '../../components/ButtonText'
import Input from '../../components/Input'
import theme from '../../styles/theme'
import { Container, Account, Title, Subtitle } from './styles'

export default function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const loginAnonymously = async () => {
    const { user } = await auth().signInAnonymously()
    console.log(user)
  }

  const createUserAccount = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => Alert.alert('Usuario criado com sucesso'))
      .catch((err) => {
        console.log(err.code)
        if (err.code === 'auth/email-already-in-use') {
          return Alert.alert('E-mail não disponivel, use outro e-mail')
        }

        if (err.code === 'auth/invalid-email') {
          return Alert.alert('Precisa ser um e-mail válido')
        }

        if (err.code === 'auth/weak-password') {
          return Alert.alert('A senha precisa ter no minimo 6 digitos')
        }

        Alert.alert('Houve algum erro desconhecido na criação, tente novamente')
      })
  }

  const loginwithEmail = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => console.log(user))
      .catch((err) => {
        console.log(err.code)
        if (err.code === 'auth/user-not-found' || err.code === 'auth/wrong-password') {
          return Alert.alert('E-mail ou senha inválidos, tente novamente')
        }

        Alert.alert('Houve algum erro desconhecido no login, tente novamente')
      })
  }

  const forgotPassword = async () => {
    auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        Alert.alert('Enviamos um link no seu e-mail para redefinir sua senha')
      })
      .catch((err) => {
        console.log(err.code)
        if (err.code === 'auth/invalid-email') {
          return Alert.alert('Precisa ser um e-mail válido')
        }
        if (err.code === 'auth/user-not-found') {
          return Alert.alert('E-mail não encontrado, use outro e-mail')
        }
        Alert.alert('Houve algum erro desconhecido na solicitação, tente novamente')
      })
  }

  return (
    <Container>
      <Title>MyShopping</Title>
      <Subtitle>monte sua lista para te ajudar nas compras</Subtitle>

      <Input
        placeholder="e-mail"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <Input
        placeholder="senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Button title="Entrar" onPress={loginwithEmail} />

      <Button
        title="Anonimo"
        onPress={loginAnonymously}
        style={{
          backgroundColor: 'transparent',
          borderWidth: 1,
          borderColor: theme.COLORS.ORANGE,
          marginTop: 10,
        }}
      />

      {email.trim() !== '' && (
        <Account>
          <ButtonText title="Recuperar senha" onPress={forgotPassword} />
          <ButtonText title="Criar minha conta" onPress={createUserAccount} />
        </Account>
      )}
    </Container>
  )
}
