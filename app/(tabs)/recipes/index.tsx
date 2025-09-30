import {useEffect, useState} from 'react'
import {ScrollView, StyleSheet} from 'react-native'
import {useRouter} from 'expo-router'
import RecipeCard from '@/components/recipeCard'
import {Recipe} from '@/data/recipes'

export default function RecipesScreen() {
   const [recipes, setRecipes] = useState<Recipe[]>([])
   const router = useRouter()

   useEffect(() => {
      fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
         .then((res) => res.json())
         .then((data) => {
            if (data.meals) {
               const mapped: Recipe[] = data.meals.map((meal: any) => ({
                  id: meal.idMeal,
                  title: meal.strMeal,
                  description: meal.strArea || 'Okänd kategori',
                  ingredients: Object.keys(meal)
                     .filter((key) => key.startsWith('strIngredient') && meal[key])
                     .map((key) => meal[key]),
                  instructions: meal.strInstructions,
                  image: meal.strMealThumb,
               }))
               setRecipes(mapped)
            }
         })
         .catch((err) => console.error(err))
   }, [])

   return (
      <ScrollView contentContainerStyle={styles.container}>
         {recipes.map((recipe) => (
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
      </ScrollView>
   )
}

const styles = StyleSheet.create({
   container: {
      padding: 16,
   },
})
