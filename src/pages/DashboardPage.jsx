import SideNavBar from '../components/NavBar/SideNavBar/SideNavBar';
import UpperNavBar from '../components/NavBar/UpperNavBar/UpperNavBar';
import React from 'react';
import RecipesList from '../components/RecipesList/RecipesList';
import './DashboardPage.css';

export default function DashboardPage() {
  return (
    <div className="dashboard-page-content">
      <UpperNavBar />
      <div className="side-nav-and-recipes-list">
        <SideNavBar />
        <RecipesList />
      </div>
    </div>
  );
}
