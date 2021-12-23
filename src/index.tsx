import { Dimensions, StatusBar, View } from 'react-native'

import AppLoading from 'expo-app-loading'
import { NavigationContainer } from '@react-navigation/native'
import { ThemeProvider } from 'styled-components/native'
import { useFonts, Roboto_400Regular, Roboto_500Medium } from '@expo-google-fonts/roboto'

import theme from './styles/theme'
import Routes from './routes'

const { width, height } = Dimensions.get('window')

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <View style={{ width, height }}>
      <ThemeProvider theme={theme}>
        <StatusBar backgroundColor="transparent" translucent barStyle="light-content" />
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </ThemeProvider>
    </View>
  )
}
