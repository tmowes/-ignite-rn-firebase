// import auth from '@react-native-firebase/auth'

import ButtonIcon from '../ButtonIcon'
import { Container, Title } from './styles'
import { HeaderProps } from './types'

export default function Header(props: HeaderProps) {
  const { title, showLogoutButton = false } = props
  function handleLogout() {
    // auth().signOut()
  }

  return (
    <Container showLogoutButton={showLogoutButton}>
      <Title>{title}</Title>

      {showLogoutButton && (
        <ButtonIcon
          icon="logout"
          color="alert"
          style={{ marginTop: 20 }}
          onPress={() => handleLogout()}
        />
      )}
    </Container>
  )
}
