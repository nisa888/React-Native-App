import {View, StyleSheet} from 'react-native'
import {mockedRecipes} from '@/data/recipes'
import RecipeCard from '@/components/recipeCard'

export default function RecipesScreen() {
   return (
      <View>
         {mockedRecipes.map((r) => (
            <RecipeCard recipe={r} key={r.id} />
         ))}
      </View>
   )
}
