import Cocktail from "./Cocktail"
import { useGlobalContext } from "./context"
function Home() {
  const { isLoading, cocktailsData } = useGlobalContext()
  return (
    <div className="Home">
      <h1>Home</h1>
      {isLoading ? (
        <h2>Loading</h2>
      ) : (
        <div className="drinks-container">
          {cocktailsData.map((item) => (
            <Cocktail drinkData={item} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Home
