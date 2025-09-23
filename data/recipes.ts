export interface Recipe {
  id: string;
  title: string;
  description: string;
  ingredients: string[];
  instructions: string;
}

export const mockedRecipes: Recipe[] = [
  {
    id: "r1",
    title: "Spaghetti Bolognese",
    description: "En klassisk italiensk rätt",
    ingredients: ["Spaghetti", "Köttfärs", "Tomatsås"],
    instructions: "Koka pastan. Stek köttfärsen. Blanda med tomatsås. Servera med pasta.",
  },
  {
    id: "r2",
    title: "Kycklingwok",
    description: "Snabb wok med grönsaker",
    ingredients: ["Kyckling", "Paprika", "Sojasås"],
    instructions: "Skär kycklingen. Woka med grönsaker. Tillsätt sås. Servera med ris.",
  },
];