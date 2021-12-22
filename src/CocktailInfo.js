import { useParams } from "react-router-dom"
import { useGlobalContext } from "./context"
const CocktailInfo = () =>{
  const { cocktailsData } = useGlobalContext()
  const { slug } = useParams()
  //TODO add ingredients
const {strDrink,idDrink,strDrinkThumb,strGlass,strInstructions} = cocktailsData.find(item=>item.idDrink === slug)
  return (
      <div className="cocktail-detail">
        <h1>
          {strDrink}-{idDrink}
        </h1>
        <img src={strDrinkThumb} alt={strDrink} />
        <h3>{strGlass}</h3>
        <p>{strInstructions}</p>
        <h2>Hi there </h2>
      </div>
  )
}

export default CocktailInfo