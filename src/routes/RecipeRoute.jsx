import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import AddRecipePage from '../pages/AddRecipePage/AddRecipePage';

function RecipeRoute(props) {
    return (
        <>
            <Routes>
                <Route path='/' element={<HomePage />}/>
                <Route path='/addrecipe' element={ <AddRecipePage /> } />

            </Routes>
        </>
    );
}

export default RecipeRoute;