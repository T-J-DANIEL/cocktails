import {Link} from "react-router-dom"

function Cocktail({ drinkData }) {
  const { idDrink, strDrink, strDrinkThumb } = drinkData
  return (
    <div key={idDrink}className="cocktail">
      <h1>{strDrink}</h1>
      <h2>{idDrink}</h2>
      <div className="image-container">
        <img src={strDrinkThumb} alt={strDrink} />
      </div>
      <Link to={`/drinks/${idDrink}`}>More Info</Link>
      
    </div>
  )
}

export default Cocktail
