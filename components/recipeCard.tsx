import {View, Text, StyleSheet} from 'react-native'
import {Recipe} from '../data/recipes'

interface Props {
   recipe: Recipe
}

export default function RecipeCard({recipe}: Props) {
   return (
      <View style={styles.card}>
         <Text style={styles.title}>{recipe.title}</Text>
         <Text>{recipe.description}</Text>
         <Text style={styles.subtitle}>Ingredienser:</Text>
         {recipe.ingredients.map((ing, index) => (
            <Text key={index}>• {ing}</Text>
         ))}
      </View>
   )
}

const styles = StyleSheet.create({
   card: {
      padding: 12,
      marginBottom: 10,
      borderRadius: 8,
   },
   title: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 4,
   },
   subtitle: {
      marginTop: 6,
   },
})
