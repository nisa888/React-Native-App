import {useEffect, useState} from 'react'
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native'
import {useLocalSearchParams} from 'expo-router'
import {LinearGradient} from 'expo-linear-gradient'

interface Recipe {
   id: string
   title: string
   description: string
   ingredients: string[]
   instructions: string
   image?: string
}

export default function RecipeDetail() {
   const {id} = useLocalSearchParams<{id: string}>()
   const [recipe, setRecipe] = useState<Recipe | null>(null)
   const [loading, setLoading] = useState(true)

   useEffect(() => {
      if (!id) return
      fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
         .then((res) => res.json())
         .then((data) => {
            if (data.meals && data.meals.length > 0) {
               const meal = data.meals[0]
               const ingredients = Object.keys(meal)
                  .filter((key) => key.startsWith('strIngredient') && meal[key])
                  .map((key) => {
                     const index = key.replace('strIngredient', '')
                     const measure = meal[`strMeasure${index}`]
                     return `${measure ? measure : ''} ${meal[key]}`.trim()
                  })

               setRecipe({
                  id: meal.idMeal,
                  title: meal.strMeal,
                  description: meal.strArea || 'Okänd kategori',
                  ingredients,
                  instructions: meal.strInstructions,
                  image: meal.strMealThumb,
               })
            }
         })
         .catch((err) => console.error(err))
         .finally(() => setLoading(false))
   }, [id])

   if (!recipe) return <Text>Recipe not found</Text>

   return (
      <ScrollView contentContainerStyle={styles.container}>
         {recipe.image && <Image source={{uri: recipe.image}} style={styles.image} />}
         <Text style={styles.title}>{recipe.title}</Text>
         <Text>{recipe.description}</Text>

         <Text style={styles.subtitle}>Ingredienser:</Text>
         {recipe.ingredients.map((ing, index) => (
            <Text key={index}>• {ing}</Text>
         ))}

         <Text style={styles.subtitle}>Instruktioner:</Text>
         <Text>{recipe.instructions}</Text>
      </ScrollView>
   )
}

const styles = StyleSheet.create({
   container: {
      padding: 20,
   },
   image: {
      width: '100%',
      height: 200,
      borderRadius: 8,
      marginBottom: 12,
   },
   title: {
      fontSize: 22,
      fontWeight: 'bold',
      marginBottom: 4,
   },
   subtitle: {
      marginTop: 12,
      fontWeight: 'bold',
   },
})
