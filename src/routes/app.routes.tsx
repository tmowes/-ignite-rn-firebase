import { Platform } from 'react-native'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialIcons } from '@expo/vector-icons'

import theme from '../styles/theme'
import Products from '../pages/Products'
import Receipts from '../pages/Receipts'
import Upload from '../pages/Upload'

const { Navigator, Screen } = createBottomTabNavigator()

export default function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        tabBarActiveTintColor: theme.COLORS.WHITE,
        tabBarInactiveTintColor: theme.COLORS.GRAY500,
        tabBarActiveBackgroundColor: theme.COLORS.GRAY800,
        tabBarInactiveBackgroundColor: theme.COLORS.GRAY800,
        tabBarLabelPosition: 'beside-icon',
        headerShown: false,
        tabBarStyle: {
          height: 64,
          borderTopWidth: 0,
          paddingVertical: Platform.OS === 'ios' ? 20 : 0,
        },
        tabBarLabelStyle: {
          fontFamily: theme.FONTS.REGULAR,
        },
      }}
    >
      <Screen
        name="Produtos"
        component={Products}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="shopping-cart" size={size} color={color} />
          ),
        }}
      />
      <Screen
        name="Comprovantes"
        component={Receipts}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="receipt" size={size} color={color} />
          ),
        }}
      />
      <Screen
        name="Upload"
        component={Upload}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="backup" size={size} color={color} />
          ),
        }}
      />
    </Navigator>
  )
}
