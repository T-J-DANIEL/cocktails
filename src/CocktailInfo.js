import { useParams } from "react-router-dom"
import { useGlobalContext } from "./context"
const CocktailInfo = () =>{
  const { cocktailsData } = useGlobalContext()
  const { slug } = useParams()
const {
  strDrink,
  idDrink,
  strDrinkThumb,
  strGlass,
  strInstructions,
  strIngredient1,
  strIngredient2,
  strIngredient3,
  strIngredient4,
  strIngredient5,
} = cocktailsData.find((item) => item.idDrink === slug)
  return (
    <div className="cocktail-detail">
      <div className="image-container">
        <img src={strDrinkThumb} alt={strDrink} />
      </div>
      <div className="text-container">
        <h1>
          {strDrink}-{idDrink}
        </h1>
        <h3>{strGlass}</h3>
        <p>{strInstructions}</p>
        <h2>Ingredients: </h2>
        <p>
          {strIngredient1 +
            "," +
            strIngredient2 +
            "," +
            strIngredient3||"" +
            "," +
            strIngredient4||"" +
            "," +
            strIngredient5||""}
        </p>
      </div>
    </div>
  )
}

export default CocktailInfo