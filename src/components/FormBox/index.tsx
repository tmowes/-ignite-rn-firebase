import { useState } from 'react'
import { Alert } from 'react-native'

import firestore from '@react-native-firebase/firestore'

import { Container } from './styles'
import ButtonIcon from '../ButtonIcon'
import Input from '../Input'

export default function FormBox() {
  const [description, setDescription] = useState('')
  const [quantity, setQuantity] = useState(0)

  const handleAddProduct = async () => {
    firestore()
      .collection('products')
      .add({
        description,
        quantity,
        done: false,
        createdAt: firestore.FieldValue.serverTimestamp(),
      })
      .then(() => Alert.alert('Produto adicionado com sucesso!'))
      .catch((err) => console.error(err))
      .finally(() => {
        setDescription('')
        setQuantity(0)
      })
  }

  return (
    <Container>
      <Input
        placeholder="Nome do produto"
        size="medium"
        value={description}
        onChangeText={setDescription}
      />

      <Input
        placeholder="0"
        keyboardType="numeric"
        size="small"
        style={{ marginHorizontal: 8 }}
        value={String(quantity)}
        onChangeText={(v) => setQuantity(Number(v))}
      />

      <ButtonIcon size="large" icon="add-shopping-cart" onPress={handleAddProduct} />
    </Container>
  )
}
