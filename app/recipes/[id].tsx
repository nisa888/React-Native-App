import {View, Text, StyleSheet} from 'react-native'
import {useLocalSearchParams} from 'expo-router'
import {mockedRecipes} from '@/data/recipes'

export default function RecipeDetail() {
   const {id} = useLocalSearchParams<{id: string}>()
   const recipe = mockedRecipes.find((r) => r.id === id)

   if (!recipe) return <Text>Receptet hittades inte</Text>

   return (
      <View style={styles.container}>
         <Text>{recipe.title}</Text>
         <Text>{recipe.description}</Text>
         <Text>Ingredienser:</Text>
         {recipe.ingredients.map((ing, index) => (
            <Text>• {ing}</Text>
         ))}
         <Text>Instruktioner:</Text>
         <Text>{recipe.instructions}</Text>
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      padding: 20,
   },
})
