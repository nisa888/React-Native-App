import {Tabs} from 'expo-router'
import {Ionicons} from '@expo/vector-icons'

export default function TabsLayout() {
   return (
      <Tabs>
         <Tabs.Screen
            name='index'
            options={{
               title: 'Start',
               tabBarIcon: ({color, size}) => <Ionicons name='home' size={size} color={color} />,
            }}
         />
         <Tabs.Screen
            name='recipes'
            options={{
               title: 'Recept',
               tabBarIcon: ({color, size}) => <Ionicons name='restaurant' size={size} color={color} />,
            }}
         />
      </Tabs>
   )
}
