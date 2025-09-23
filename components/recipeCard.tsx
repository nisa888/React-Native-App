import {View, Text, StyleSheet} from 'react-native'
import {Recipe} from '../data/recipes'

interface Props {
   recipe: Recipe
}

export default function RecipeCard({recipe}: Props) {
   return (
      <View>
         <Text>{recipe.title}</Text>
         <Text>{recipe.description}</Text>
         <Text>{recipe.ingredients}</Text>
      </View>
   )
}
