import { useEffect, useState } from 'react'
import { FlatList } from 'react-native'

import firestore from '@react-native-firebase/firestore'

import { styles } from './styles'
import Product from '../Product'
import { ProductDataProps } from '../Product/types'

export default function ShoppingList() {
  const [products, setProducts] = useState<ProductDataProps[]>([])

  useEffect(() => {
    const subscribe = firestore()
      .collection('products')
      .orderBy('description', 'asc')
      .onSnapshot((query) => {
        const data = query.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as ProductDataProps[]
        setProducts(data)
      })
    return () => subscribe()
  }, [])

  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <Product data={item} />}
      showsVerticalScrollIndicator={false}
      style={styles.list}
      contentContainerStyle={styles.content}
    />
  )
}
