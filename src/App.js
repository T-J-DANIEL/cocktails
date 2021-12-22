import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import Home from "./Home"
import About from "./About"
import CocktailInfo from"./CocktailInfo"
function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/drinks/:slug" element={<CocktailInfo />}></Route>
      </Routes>
    </Router>
    // <Home/>
  )
}

export default App
