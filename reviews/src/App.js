import './App.css';
import React,{useEffect, useState} from "react"
import Recipe from './recipe'

const App = () => {

  const APP_ID = '42592d68';
  const APP_KEY = '6f655576c7347d9c064a8441e4d3e84f	';
  
  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('Chicken')

  useEffect (() => {
    getRecipes()
  }, [query]);
  useEffect(()=> {
    document.title = `Searching for ${query}`
  })


  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json()
    setRecipes(data.hits)
    // console.log(data.hits)
  }

  const updateSearch = e => {
    setSearch(e.target.value);
    //debugging
    // console.log(search)
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search)
    setSearch('')
  }

return(
  <div className="App">
      <h1 className="heading">Search Recipes</h1>
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar "type="text" value={search} onChange={updateSearch}/>
        <button className="search-button" type="submit">Search</button>
      </form>
      {recipes.map(recipe => (
        <Recipe
        key={recipe.recipe.label}
        title={recipe.recipe.label} 
        image={recipe.recipe.image} 
        calories ={recipe.recipe.calories}
        ingredients = {recipe.recipe.ingredients}>
        </Recipe>
      ))}
  </div>
)
}



export default App;
