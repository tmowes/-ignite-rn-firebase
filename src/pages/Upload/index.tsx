import { useState } from 'react'
import { Alert } from 'react-native'

import * as ImagePicker from 'expo-image-picker'
import storage from '@react-native-firebase/storage'

import { Container, Content, Progress, Transferred, UploadInfo } from './styles'
import Header from '../../components/Header'
import Photo from '../../components/Photo'
import Button from '../../components/Button'
import { bytesToKBytes } from '../../utils/convert/bytesToKBytes'

export default function Upload() {
  const [image, setImage] = useState('')
  const [transferredBytes, setTransferredBytes] = useState('')
  const [progress, setProgress] = useState(0)

  async function handlePickImage() {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync()

    if (status === 'granted') {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        aspect: [4, 4],
        quality: 1,
      })

      if (!result.cancelled) {
        setImage(result.uri)
      }
    }
  }

  const uploadImage = async () => {
    const fileName = new Date().getTime()
    const reference = storage().ref(`/images/${fileName}.png`)
    const uploadTask = reference.putFile(image)
    uploadTask.on('state_changed', (task) => {
      const percent = Math.round((task.bytesTransferred / task.totalBytes) * 100)
      setProgress(percent)
      setTransferredBytes(
        `${bytesToKBytes(task.bytesTransferred)}kB de ${bytesToKBytes(
          task.totalBytes,
        )}kB transferidos`,
      )
    })
    uploadTask
      .then(async () => {
        const imageUrl = await reference.getDownloadURL()
        console.log(imageUrl)
        Alert.alert('Upload concluido!')
      })
      .catch((err) => console.error(err))
      .finally(() => {
        setTransferredBytes('')
        setImage('')
        setProgress(0)
      })
  }

  return (
    <Container>
      <Header title="Upload de comprovantes" />

      <Content>
        <Photo uri={image} onPress={() => handlePickImage()} />
        {image !== '' && (
          <UploadInfo>
            <Progress>{progress}%</Progress>
            <Transferred>{transferredBytes}</Transferred>
          </UploadInfo>
        )}
        <Button
          title="Fazer upload"
          onPress={uploadImage}
          style={{ marginTop: 'auto', marginBottom: 16 }}
        />
      </Content>
    </Container>
  )
}
