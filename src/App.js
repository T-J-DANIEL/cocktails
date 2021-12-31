import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Outlet,
} from "react-router-dom"
import Home from "./Home"
import About from "./About"
import CocktailInfo from "./CocktailInfo"
function App() {
  return (
    <Router>
      <div className="nav-container">
        <div className="nav-inner-container">
          <h1>Cocktails DB</h1>
          <nav className="nav">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
          </nav>
        </div>
      </div>
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/drinks/:slug" element={<CocktailInfo />}></Route>
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </Router>
  )
}

export default App
