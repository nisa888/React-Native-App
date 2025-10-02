import {useState} from 'react'
import {View, Text, TextInput, Button, ScrollView, StyleSheet} from 'react-native'
import {useRouter} from 'expo-router'
import RecipeCard from '@/components/recipeCard'
import {Recipe} from '@/data/recipes'
import {LinearGradient} from 'expo-linear-gradient'

export default function HomeScreen() {
   const [searchTerm, setSearchTerm] = useState('')
   const [results, setResults] = useState<Recipe[]>([])
   const router = useRouter()

   const handleSearch = () => {
      if (!searchTerm) return

      fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchTerm}`)
         .then((res) => res.json())
         .then((data) => {
            if (data.meals) {
               const mapped: Recipe[] = data.meals.map((meal: any) => ({
                  id: meal.idMeal,
                  title: meal.strMeal,
                  description: meal.strCategory || 'Okänd kategori',
                  ingredients: [],
                  instructions: '',
                  image: meal.strMealThumb,
               }))
               setResults(mapped)
            } else {
               setResults([])
            }
         })
   }

   return (
      <LinearGradient colors={['#01122eff', '#374864ff']} style={styles.gradient}>
         <View style={styles.container}>
            <Text style={styles.label}>Sök efter recept baserat på ingredienser:</Text>

            <TextInput style={styles.input} placeholder='search' value={searchTerm} onChangeText={setSearchTerm} />

            <Button title='Sök' onPress={handleSearch} />

            <ScrollView style={styles.results}>
               {results.map((recipe) => (
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
               {results.length === 0 && <Text style={styles.noResults}>Inga recept hittades.</Text>}
            </ScrollView>
         </View>
      </LinearGradient>
   )
}

const styles = StyleSheet.create({
   gradient: {
      flex: 1,
   },
   container: {
      flex: 1,
      padding: 16,
   },
   label: {
      color: 'white',
      fontSize: 16,
      marginBottom: 8,
   },
   input: {
      borderWidth: 1,
      borderColor: '#ccc',
      padding: 8,
      marginVertical: 8,
      borderRadius: 4,
      backgroundColor: 'white',
   },
   results: {
      marginTop: 16,
   },
   noResults: {
      color: 'white',
      marginTop: 16,
   },
})
