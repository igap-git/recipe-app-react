import React from 'react';

export default function RecipeDetails({ selectedId }) {
  const selectRecipesResult = recipesApi.endpoints.getRecipes.select();
  const recipesData = useSelector(selectRecipesResult)?.data;

  const recipe = recipesData?.find((r) => r.id === selectedId);

  if (!recipe) return <p>Loading...</p>;

  return (
    <div>
      <h2>{recipe.name}</h2>
      <img src={recipe.image} alt={recipe.name} />
      <p>{recipe.cuisine}</p>
    </div>
  );
}
