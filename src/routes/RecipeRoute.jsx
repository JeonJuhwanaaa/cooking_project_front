import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import AddRecipePage from '../pages/AddRecipePage/AddRecipePage';
import AllRecipePage from '../pages/AllRecipePage/AllRecipePage';

function RecipeRoute(props) {
    return (
        <>
            <Routes>
                <Route path='/' element={<HomePage />}/>
                <Route path='/addrecipe' element={ <AddRecipePage /> } />
                <Route path='/allrecipe' element={ <AllRecipePage /> } />

            </Routes>
        </>
    );
}

export default RecipeRoute;