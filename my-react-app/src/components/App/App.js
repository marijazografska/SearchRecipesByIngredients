import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Home from './Home';
import RecipeDetail from "../Recipe/RecipeDetail";
import Search from './Search'
import Pricing from "./Pricing";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} /> {/* Default home page */}
                <Route path="/search" element={<Search />} /> {/* Search page */}
                <Route path="/recipes/:id/info" element={<RecipeDetail />} />
                <Route path="/pricing" element={<Pricing />} />
            </Routes>
        </Router>
    );
};
export default App;

