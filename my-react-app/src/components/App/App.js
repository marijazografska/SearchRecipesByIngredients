import logo from '../../logo.svg';
import './App.css';
import React, {Component} from "react";
import RecipeList from '../Recipe/RecipeList';
import RecipeInfo from '../Recipe/RecipeInfo';
function App() {
  return (
      <div className="App">
        <header className="App-header">
          <h1>Recipe Finder</h1>
          <RecipeList />
        </header>
      </div>
  );
}
export default App;
