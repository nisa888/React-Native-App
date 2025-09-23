import {ScrollView, StyleSheet} from 'react-native'
import {mockedRecipes} from '@/data/recipes'
import RecipeCard from '@/components/recipeCard'

export default function RecipesScreen() {
   return (
      <ScrollView>
         {mockedRecipes.map((r) => (
            <RecipeCard recipe={r} key={r.id} />
         ))}
      </ScrollView>
   )
}
