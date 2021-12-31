import { useParams, useNavigate } from "react-router-dom"

// import { useNavigate } from "react-router-dom"; // v6

// function App(){

//   ...
//   const navigate = useNavigate();
//   ...
//   navigate("/app");  
//   ...  
// }
import { useGlobalContext } from "./context"
const CocktailInfo = () =>{
    const navigate = useNavigate();
  //   navigate("/app");
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
          {strIngredient1 + "," + strIngredient2 + "," + strIngredient3 ||
            "" + "," + strIngredient4 ||
            "" + "," + strIngredient5 ||
            ""}
        </p>
        <button className="back-button" onClick={()=>{
           navigate("/");
        }}>Back to Cocktails</button>
      </div>
    </div>
  )
}

export default CocktailInfo