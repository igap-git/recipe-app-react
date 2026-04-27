import SideNavBar from '../components/NavBar/SideNavBar/SideNavBar';
import UpperNavBar from '../components/NavBar/UpperNavBar/UpperNavBar';
import React from 'react';
import RecipesList from '../components/RecipesList/RecipesList';
import './DashboardPage.css';
import SearchField from '../components/SearchField/SearchField';
import DropDownMenu from '../components/DropDownMenu/DropDownMenu';
import FilterBar from '../components/FilterBar/FilterBar';

export default function DashboardPage() {
  return (
    <div className="dashboard-page-content">
      <UpperNavBar />
      <div className="side-nav-with-search-field-and-recipes-list">
        <SideNavBar />
        <div className="search-field-and-recipes-list">
          <div className="search-field-and-filters">
            <SearchField placeholder="Search..." variant="search-field" />
            <div className="menu-filter-content">
              <FilterBar />
            </div>
          </div>
          <div className="recipes-list-content">
            <RecipesList />
          </div>
        </div>
      </div>
    </div>
  );
}
