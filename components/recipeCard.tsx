import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import {Recipe} from '../data/recipes'

interface Props {
   recipe: Recipe
   onPress: () => void
}

export default function RecipeCard({recipe, onPress}: Props) {
   return (
      <TouchableOpacity onPress={onPress}>
         <View style={styles.card}>
            <Text style={styles.title}>{recipe.title}</Text>
            <Text>{recipe.description}</Text>
            <Text style={styles.subtitle}>Ingredienser:</Text>
            {recipe.ingredients.map((ing, index) => (
               <Text key={index}>• {ing}</Text>
            ))}
         </View>
      </TouchableOpacity>
   )
}

const styles = StyleSheet.create({
   card: {
      padding: 12,
      marginBottom: 10,
      borderRadius: 8,
      backgroundColor: '#d3d3d3',
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
