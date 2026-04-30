import React, { useState } from 'react';
import { useGetRecipesQuery } from '../../services/recipesApi';
import { selectUniqueValues } from '../../services/selectUniqueTypes';
import DropDownMenu from '../DropDownMenu/DropDownMenu';
import './FilterBar.css';

export default function FilterBar({ setFilters, filters }) {
  const { data: recipes, isLoading } = useGetRecipesQuery();
  const [openMenu, setOpenMenu] = useState(null);

  const handleToggle = (menuName) => {
    setOpenMenu((prev) => (prev === menuName ? null : menuName));
  };

  const handleSelect = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const mealDifficulties = selectUniqueValues(recipes, 'difficulty');
  const mealRatings = selectUniqueValues(recipes, 'rating');

  return (
    <div className="filter-bar">
      <DropDownMenu
        type="difficulty"
        selectedValue={filters?.difficulty}
        isOpen={openMenu === 'difficulty'}
        onToggle={() => handleToggle('difficulty')}
        items={isLoading ? [] : mealDifficulties}
        variant="filter-bar"
        onItemClick={(value) => handleSelect('difficulty', value)}
      >
        Difficulty
      </DropDownMenu>

      <DropDownMenu
        type="rating"
        selectedValue={filters?.rating}
        isOpen={openMenu === 'rating'}
        onToggle={() => handleToggle('rating')}
        items={isLoading ? [] : mealRatings}
        variant="filter-bar"
        onItemClick={(value) => handleSelect('rating', value)}
      >
        Rating
      </DropDownMenu>
    </div>
  );
}
