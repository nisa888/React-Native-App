import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native'
import {Recipe} from '@/data/recipes'

interface Props {
   recipe: Recipe
   onPress: () => void
}

export default function RecipeCard({recipe, onPress}: Props) {
   return (
      <TouchableOpacity onPress={onPress} style={styles.card}>
         {recipe.image ? <Image source={{uri: recipe.image}} style={styles.image} /> : null}
         <Text style={styles.title}>{recipe.title}</Text>
         <Text style={styles.descrption}>{recipe.description}</Text>
      </TouchableOpacity>
   )
}

const styles = StyleSheet.create({
   card: {
      padding: 12,
      marginBottom: 10,
      borderRadius: 8,

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
      color: '#f5f5f5ff',
      fontWeight: 'bold',
      marginBottom: 4,
      textAlign: 'center',
   },
   descrption: {
      color: '#d1d1d1ff',
   },
   subtitle: {
      marginTop: 6,
      fontWeight: 'bold',
      color: 'white',
   },
})
