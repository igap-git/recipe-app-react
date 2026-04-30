import SideNavBar from '../components/NavBar/SideNavBar/SideNavBar';
import UpperNavBar from '../components/NavBar/UpperNavBar/UpperNavBar';
import React, { useState } from 'react';
import RecipesList from '../components/RecipesList/RecipesList';
import './DashboardPage.css';
import SearchField from '../components/SearchField/SearchField';
import DropDownMenu from '../components/DropDownMenu/DropDownMenu';
import FilterBar from '../components/FilterBar/FilterBar';
import RecipeDetails from '../components/RecipeDetails/RecipeDetails';

export default function DashboardPage() {
  const [filters, setFilters] = useState({});

  return (
    <div className="dashboard-page-content">
      <UpperNavBar />
      <div className="side-nav-with-search-field-and-recipes-list">
        <SideNavBar setFilters={setFilters} />
        <div className="search-field-and-recipes-list">
          <div className="search-field-and-filters">
            <SearchField placeholder="Search..." variant="search-field" />
            <div className="menu-filter-content">
              <FilterBar setFilters={setFilters} filters={filters} />
            </div>
          </div>
          <div className="recipes-list-content">
            <RecipesList filters={filters} />
          </div>
        </div>
      </div>
      <RecipeDetails id={3}></RecipeDetails>
    </div>
  );
}
