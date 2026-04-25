import React, { useState } from 'react';
import DropDownMenu from '../../DropDownMenu/DropDownMenu';
import Button from '../../Button/Button';
import './SideNavBar.css';
import { useGetRecipesQuery } from '../../../services/recipesApi';
import { selectUniqueValues } from '../../../services/selectUniqueTypes';

export default function SideNavBar() {
  const { data: recipes, isLoading } = useGetRecipesQuery();
  const [openMenu, setOpenMenu] = useState(null);

  const handleToggle = (menuName) => {
    setOpenMenu((prev) => (prev === menuName ? null : menuName));
  };
  const mealTypes = selectUniqueValues(recipes, 'mealType');
  const cuisineTypes = selectUniqueValues(recipes, 'cuisine');

  return (
    <div className="side-nav-bar-wrapper">
      <div className="side-nav-bar">
        <Button variant="side-menu">Dashboard</Button>
        <Button variant="side-menu">Blog</Button>
        <DropDownMenu
          isOpen={openMenu === 'meal'}
          onToggle={() => handleToggle('meal')}
          items={isLoading ? [] : mealTypes}
        >
          Meal Type
        </DropDownMenu>

        <DropDownMenu
          isOpen={openMenu === 'cuisine'}
          onToggle={() => handleToggle('cuisine')}
          items={isLoading ? [] : cuisineTypes}
        >
          Cuisine
        </DropDownMenu>
        <Button variant="side-menu">Favorites</Button>
      </div>
      <div className="side-nav-bar-support">
        <Button variant="side-menu-support">Support</Button>
      </div>
    </div>
  );
}
