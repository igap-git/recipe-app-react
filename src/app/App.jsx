import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SideNavBar from '../components/NavBar/SideNavBar/SideNavBar';
import RecipesList from '../components/RecipesList/RecipesList';
import UpperNavBar from '../components/NavBar/UpperNavBar/UpperNavBar';
import DashboardPage from '../pages/DashboardPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<DashboardPage />} />
      <Route path="/recipes" element={<RecipesList />} />
    </Routes>
  );
}
