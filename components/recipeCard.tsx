import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native'
import {Recipe} from '../data/recipes'

interface Props {
   recipe: Recipe
   onPress: () => void
}

export default function RecipeCard({recipe, onPress}: Props) {
   return (
      <TouchableOpacity onPress={onPress} style={styles.card}>
         {'image' in recipe && recipe.image ? <Image source={{uri: recipe.image}} style={styles.image} /> : null}

         <Text style={styles.title}>{recipe.title}</Text>
         <Text>{recipe.description}</Text>

         <Text style={styles.subtitle}>Ingredienser:</Text>
         {recipe.ingredients.map((ing, index) => (
            <Text key={index}>• {ing}</Text>
         ))}
      </TouchableOpacity>
   )
}

const styles = StyleSheet.create({
   card: {
      padding: 12,
      marginBottom: 10,
      borderRadius: 8,
      backgroundColor: '#d3d3d3',
      alignItems: 'center',
      width: '100%',
   },
   image: {
      width: 200,
      height: 200,
      borderRadius: 8,
      marginBottom: 8,
   },
   title: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 4,
      textAlign: 'center',
   },
   subtitle: {
      marginTop: 6,
      fontWeight: 'bold',
   },
})
