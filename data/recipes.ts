export interface Recipe {
  id: string;
  title: string;
  description: string;
  ingredients: string[];
  instructions: string;
  image?: string;
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
  {
    id: "r3",
    title: "Lax i ugn",
    description: "Enkel och nyttig vardagsrätt",
    ingredients: ["Laxfilé", "Citron", "Dill", "Potatis"],
    instructions: "Lägg lax i en form. Pressa citron över. Krydda med dill. Baka i ugn. Servera med kokt potatis.",
  },
  {
    id: "r4",
    title: "Vegetarisk lasagne",
    description: "Lasagne med zucchini och spenat",
    ingredients: ["Lasagneplattor", "Zucchini", "Spenat", "Tomatsås", "Ostsås"],
    instructions: "Varva plattor med grönsaker, tomatsås och ostsås. Gratinera i ugn tills gyllene.",
  },
  {
    id: "r5",
    title: "Köttbullar med potatismos",
    description: "Svensk husmansklassiker",
    ingredients: ["Köttfärs", "Lök", "Potatis", "Grädde", "Lingonsylt"],
    instructions: "Rulla och stek köttbullar. Koka potatis och mosa med grädde. Servera med lingonsylt.",
  },
  {
    id: "r6",
    title: "Pannkakor",
    description: "Perfekt till frukost eller mellanmål",
    ingredients: ["Mjöl", "Ägg", "Mjölk", "Smör"],
    instructions: "Vispa ihop smet. Stek tunna pannkakor i smör. Servera med sylt eller bär.",
  },
  {
    id: "r7",
    title: "Caesarsallad",
    description: "Fräsch sallad med krispig kyckling",
    ingredients: ["Romansallad", "Kyckling", "Krutonger", "Parmesan", "Caesardressing"],
    instructions: "Grilla kycklingen. Blanda sallad, dressing och krutonger. Toppa med parmesan.",
  },
  {
    id: "r8",
    title: "Chili con carne",
    description: "Mustig gryta med bönor och köttfärs",
    ingredients: ["Köttfärs", "Kidneybönor", "Lök", "Chili", "Tomat"],
    instructions: "Stek köttfärsen. Lägg till lök, chili och tomat. Koka med bönor tills grytan är mustig.",
  },
];
