import Card from '../Card/Card.jsx';
import { useGetRecipesQuery } from '../../services/recipesApi.js';
import './RecipesList.css';
import React, { useMemo } from 'react';

export default function RecipesList({ filters }) {
  const { data, error, isLoading } = useGetRecipesQuery();

  const filteredData = useMemo(() => {
    if (!Array.isArray(data)) return [];

    return data.filter((recipe) => {
      if (filters?.difficulty && recipe.difficulty !== filters.difficulty) {
        return false;
      }

      if (
        filters?.rating &&
        !(recipe.rating >= filters.rating && recipe.rating < filters.rating + 1)
      ) {
        return false;
      }

      if (filters?.cuisine && recipe.cuisine !== filters.cuisine) {
        return false;
      }
      if (filters?.mealType && !recipe.mealType?.includes(filters.mealType)) {
        return false;
      }

      return true;
    });
  }, [data, filters]);

  const selectedFilter = filters?.cuisine || filters?.mealType;

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  const noResults = filteredData.length === 0;

  return (
    <>
      {selectedFilter && <h2 className="selected-filter">{selectedFilter}</h2>}

      <div className="recipes-block-display">
        {noResults ? (
          <p className="no-results">Nothing found</p>
        ) : (
          filteredData?.map((r) => (
            <Card key={r.id} SourceImage={r.image} title={r.name} />
          ))
        )}
      </div>
    </>
  );
}
