import SignIn from '../pages/SignIn'
import AppRoutes from './app.routes'

export default function Routes() {
  const user = 'Julius'

  if (!user) {
    return <SignIn />
  } else {
    return <AppRoutes />
  }
}
