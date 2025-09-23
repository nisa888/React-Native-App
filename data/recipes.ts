export interface Recipe {
  id: string;
  title: string;
  description: string;
  ingredients: string[];
}

export const mockedRecipes: Recipe[] = [
  {
    id: "r1",
    title: "Spaghetti Bolognese",
    description: "En klassisk pasta med köttfärssås.",
    ingredients: ["spaghetti", "köttfärs", "tomatsås", "lök", "vitlök"],
  },
  {
    id: "r2",
    title: "Kycklinggryta",
    description: "Krämig gryta med kyckling och grönsaker.",
    ingredients: ["kyckling", "grädde", "paprika", "lök", "morot"],
  },
  {
    id: "r3",
    title: "Pannkakor",
    description: "Tunna pannkakor som passar perfekt med sylt.",
    ingredients: ["mjöl", "ägg", "mjölk", "smör", "salt"],
  },
];