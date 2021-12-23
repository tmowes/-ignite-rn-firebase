import auth from '@react-native-firebase/auth'

import ButtonIcon from '../ButtonIcon'
import { Container, Title } from './styles'
import { HeaderProps } from './types'

export default function Header(props: HeaderProps) {
  const { title, showLogoutButton = false } = props
  function handleLogout() {
    auth().signOut()
  }

  return (
    <Container showLogoutButton={showLogoutButton}>
      <Title>{title}</Title>

      {showLogoutButton && (
        <ButtonIcon
          icon="logout"
          color="default"
          style={{ position: 'absolute', right: 20, top: 28 }}
          onPress={() => handleLogout()}
        />
      )}
    </Container>
  )
}
