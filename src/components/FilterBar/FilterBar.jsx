import React, { useState } from 'react';
import { useGetRecipesQuery } from '../../services/recipesApi';
import { selectUniqueValues } from '../../services/selectUniqueTypes';
import DropDownMenu from '../DropDownMenu/DropDownMenu';
import './FilterBar.css';

export default function FilterBar() {
  const { data: recipes, isLoading } = useGetRecipesQuery();
  const [openMenu, setOpenMenu] = useState(null);

  const handleToggle = (menuName) => {
    setOpenMenu((prev) => (prev === menuName ? null : menuName));
  };
  const mealDifficulties = selectUniqueValues(recipes, 'difficulty');
  const mealRatings = selectUniqueValues(recipes, 'rating');

  return (
    <div className="filter-bar">
      <DropDownMenu
        isOpen={openMenu === 'difficulty'}
        onToggle={() => handleToggle('difficulty')}
        items={isLoading ? [] : mealDifficulties}
        variant="filter-bar"
      >
        Difficulty
      </DropDownMenu>
      <DropDownMenu
        isOpen={openMenu === 'rating'}
        onToggle={() => handleToggle('rating')}
        items={isLoading ? [] : mealRatings}
        variant="filter-bar"
      >
        Ratings
      </DropDownMenu>
    </div>
  );
}
