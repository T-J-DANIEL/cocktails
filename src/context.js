import React,{useState,useContext,useEffect,useCallback} from "react"
//TODO WHATS THIS?


const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

const AppContext = React.createContext()

const useGlobalContext = () =>{
    return useContext(AppContext)
}

const AppContextProvider = ({children}) =>{
    const [isLoading, setIsLoading] = useState(true)
    const [cocktailsData, setCocktailsData] = useState({})
    const getCocktails = async () => {
        let response = await fetch(url);
        let data = await response.json()
        setCocktailsData(data.drinks)
        setIsLoading(false)
    }
    useEffect(()=>{getCocktails()},[])
    return (
        <AppContext.Provider value={{
            isLoading,
            cocktailsData
        }}>
            {children}
        </AppContext.Provider>
    )
}

export { AppContextProvider, useGlobalContext, AppContext }