import Cocktail from "./Cocktail"
import { useGlobalContext} from "./context"
function Home() {
  const { isLoading, cocktailsData,searchTerm,setSearchTerm } = useGlobalContext()
  return (
    <div className="home">
      <div className="search-bar">
        <h2>Search:</h2>
        <input type="text" value={searchTerm} onChange={(e)=>{setSearchTerm(e.target.value)}}/>
      </div>
      {isLoading ? (
        <h2>Loading</h2>
      ) : (
        <div className="drinks-container">
          {cocktailsData.filter(item=>{
            if(searchTerm){
              return item.strDrink.toLowerCase().startsWith(searchTerm.toLowerCase())
            }
            else return true
          })
          
          .map((item) => (
            <Cocktail drinkData={item} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Home
