import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SideNavBar from '../components/NavBar/SideNavBar/SideNavBar';
import RecipesPage from '../pages/RecipesPage';

export default function App() {
  return (
    <>
      <SideNavBar />
      <Routes>
        <Route path="/recipes" element={<RecipesPage />} />
      </Routes>
    </>
  );
}
