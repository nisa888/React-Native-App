# Receptappen 🍲

En enkel receptapp byggd med **React Native** och **Expo**.  
Appen hämtar recept från det externa API:t [TheMealDB](https://www.themealdb.com/) och visar dem i en lista.  
Användaren kan även söka efter recept baserat på ingredienser.  

---

## Funktioner
- Lista med recept hämtade från ett API.
- Detaljsida med ingredienser, instruktioner och bild.
- Sökruta på startsidan för att söka efter recept via ingredienser.
- Navigation mellan olika sidor med hjälp av **expo-router**.

---

## Installation & körning
- Klona projektet eller ladda ner koden.  

    git clone https://github.com/nisa888/React-Native-App.git

    `npm install` - Installera alla beroenden
    `npx expo start` - Starta applikation



## Använda komponenter

### React Native-komponenter
- **View** – används för att strukturera layouten i appen  
- **Text** – används för att visa rubriker, instruktioner, ingredienser m.m.  
- **ScrollView** – används för att göra listor och innehåll skrollbart  
- **TouchableOpacity** – används för att göra kort (RecipeCard) klickbara  
- **Image** – används för att visa bilder på recepten  

---

### Expo-komponenter
- **Tabs** (från `expo-router`) – för att skapa tabbarna längst ner i appen  
- **Stack** (från `expo-router`) – för navigering mellan olika skärmar  
- **useRouter** (hook från `expo-router`) – för att programmässigt navigera i appen  
- **useLocalSearchParams** (hook från `expo-router`) – för att hämta id:t till det valda receptet  
- **Ionicons** (från `@expo/vector-icons`) – för ikoner i tabbarna  

### Extern modul
- **axios** – används för att hämta recept från API:t istället för `fetch`.

### Krav för Godkänt

- [x] Projektet använder minst 4 stycken **React Native-komponenter** och minst 4 stycken **Expo-komponenter**  
- [x] De utvalda komponenterna är antecknade i README-filen tillsammans med en lista över genomförda krav  
- [x] **React Navigation** används för att skapa en bättre upplevelse i appen  
- [x] **Git & GitHub** har använts  
- [x] Projektmappen innehåller en **README.md** fil  
- [x] Uppgiften lämnas in i tid  
- [x] Muntlig presentation är genomförd  

---

### Krav för Väl Godkänt

- [x] Alla punkter för godkänt är uppfyllda  
- [x] Ytterligare en valfri extern modul används i projektet (t.ex. **react-hook-form** eller liknande)  
- [x] Appen pratar med ett **Web-API** för att hämta data  
- [ ] Appen är förberedd för lansering till en **Appstore**  
