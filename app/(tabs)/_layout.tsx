import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import {Tabs} from 'expo-router'
import EvilIcons from '@expo/vector-icons/EvilIcons'

export default function TabsLayout() {
   return (
      <Tabs
         screenOptions={{
            headerStyle: {
               height: 70,
               backgroundColor: '#859dc4ff',
            },
         }}>
         <Tabs.Screen
            name='index'
            options={{
               title: 'Start',
               tabBarIcon: ({color, size}) => <EvilIcons name='search' size={24} color='black' />,
            }}
         />
         <Tabs.Screen
            name='recipes'
            options={{
               title: 'Recept',
               tabBarIcon: ({color, size}) => <MaterialCommunityIcons name='food-turkey' size={24} color='black' />,
            }}
         />
      </Tabs>
   )
}
