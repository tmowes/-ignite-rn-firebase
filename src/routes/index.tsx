import { useEffect, useState } from 'react'

import auth from '@react-native-firebase/auth'

import SignIn from '../pages/SignIn'
import AppRoutes from './app.routes'

export type UserProps = {
  uid: string
}

export default function Routes() {
  const [user, setUser] = useState<UserProps | null>(null)

  useEffect(() => {
    const subscribe = auth().onAuthStateChanged((userAuth) => {
      setUser(userAuth)
    })
    return () => subscribe()
  }, [])

  if (user) {
    return <AppRoutes />
  } else {
    return <SignIn />
  }
}
