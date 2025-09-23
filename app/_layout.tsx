import {Tabs} from 'expo-router'

export default function Layout() {
   return (
      <Tabs>
         <Tabs.Screen name='index' options={{title: 'Start'}} />
         <Tabs.Screen name='recipes' options={{title: 'Recept'}} />
      </Tabs>
   )
}
