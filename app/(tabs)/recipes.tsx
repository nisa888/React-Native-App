import {View, StyleSheet} from 'react-native'
import {mockedRecipes} from '@/data/recipes'
import RecipeCard from '@/components/recipeCard'
import {router, useRouter} from 'expo-router'

export default function RecipesScreen() {
   const router = useRouter()
   return (
      <View>
         {mockedRecipes.map((recipe) => (
            <RecipeCard
               key={recipe.id}
               recipe={recipe}
               onPress={() =>
                  router.push({
                     pathname: '/recipes/[id]',
                     params: {id: recipe.id},
                  })
               }
            />
         ))}
      </View>
   )
}
