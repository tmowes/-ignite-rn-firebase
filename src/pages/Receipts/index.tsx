import { Alert, FlatList } from 'react-native'
import { useEffect, useState } from 'react'

import format from 'date-fns/format'
import ptBR from 'date-fns/locale/pt-BR'
import storage from '@react-native-firebase/storage'

import { Container, PhotoInfo } from './styles'
import Header from '../../components/Header'
import Photo from '../../components/Photo'
import File from '../../components/File'
import { FileDataProps } from '../../components/File/types'

export default function Receipts() {
  const [photos, setPhotos] = useState<FileDataProps[]>([])
  const [selectedPhoto, setSelectedPhoto] = useState('')
  const [photoInfo, setPhotoInfo] = useState('')

  const showImage = async (path: string) => {
    const urlImage = await storage().ref(path).getDownloadURL()
    const infoImage = await storage().ref(path).getMetadata()
    const formattedDate = format(new Date(infoImage.timeCreated), 'dd/MM/yyyy HH:mm', {
      locale: ptBR,
    })
    setSelectedPhoto(urlImage)
    setPhotoInfo(`Upload realizado em ${formattedDate}`)
  }

  const deleteImage = async (path: string) => {
    storage()
      .ref(path)
      .delete()
      .then(() => {
        Alert.alert('Imagem deletada com sucesso')
        loadImages()
      })
      .catch((err) => console.error(err))
      .finally(() => {
        setSelectedPhoto('')
        setPhotoInfo('Imagem deletada com sucesso')
      })
  }

  const loadImages = async () => {
    storage()
      .ref('images')
      .list()
      .then((res) => {
        const files: FileDataProps[] = []
        res.items.forEach((file) => {
          files.push({
            name: file.name,
            path: file.fullPath,
          })
        })
        setPhotos(files)
      })
  }

  useEffect(() => {
    loadImages()
  }, [])

  return (
    <Container>
      <Header title="Comprovantes" />
      <Photo uri={selectedPhoto} />
      <PhotoInfo>{photoInfo}</PhotoInfo>
      <FlatList
        data={photos}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <File
            data={item}
            onShow={() => showImage(item.path)}
            onDelete={() => deleteImage(item.path)}
          />
        )}
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
        style={{ width: '100%', padding: 24 }}
      />
    </Container>
  )
}
