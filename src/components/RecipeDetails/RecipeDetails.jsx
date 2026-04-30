import React from 'react';
import { useSelector } from 'react-redux';
import { recipesApi, useGetRecipeByIdQuery } from '../../services/recipesApi';
import './RecipeDetails.css';
import calories from '../../assets/icons/calories.svg';
import plate from '../../assets/icons/plate.svg';
import star from '../../assets/icons/star.svg';
import timer from '../../assets/icons/timer.svg';
import hashtag from '../../assets/icons/hashtag.svg';
export default function RecipeDetails({ id }) {
  const selectRecipesResult = recipesApi.endpoints.getRecipes.select();
  const recipesData = useSelector(selectRecipesResult)?.data;
  const recipeFromCache = recipesData?.find((r) => r.id === id);

  const { data: recipeFromApi, isLoading } = useGetRecipeByIdQuery(id, {
    skip: !!recipeFromCache,
  });

  const recipe = recipeFromCache || recipeFromApi;

  if (isLoading && !recipe) return <p>Loading...</p>;
  if (!recipe) return <p>Recipe not found</p>;

  const { id: _, ...recipeWithoutId } = recipe;

  return (
    <div className="recipe-details">
      <div className="image-and-informations">
        <div className="recipe-image">
          <img src={recipeWithoutId.image} alt="recipe" />
        </div>

        <div className="recipe-informations">
          <h2>{recipeWithoutId.name}</h2>

          <div className="general-informations">
            <p>Cuisine: {recipeWithoutId.cuisine}</p>
            <p>Meal Type: {recipeWithoutId.mealType}</p>
            <p>Difficulty: {recipeWithoutId.difficulty}</p>
          </div>

          <div className="details-informations">
            <p>
              <img src={timer} className="icon" alt="timer icon" />
              Preparation time: {recipeWithoutId.prepTimeMinutes} min | Cook
              time: {recipeWithoutId.cookTimeMinutes} min
            </p>

            <p>
              <img src={plate} className="icon" alt="plate icon" />
              Servings: {recipeWithoutId.servings}
            </p>

            <p>
              <img src={calories} className="icon" alt="calories icon" />
              Calories: {recipeWithoutId.caloriesPerServing}
            </p>

            <p>
              <img src={star} className="icon" alt="star icon" />
              Rate: {recipeWithoutId.rating}
            </p>
          </div>

          <p className="tags">
            <img src={hashtag} className="icon" alt="hashtag icon" />
            {recipeWithoutId.tags?.join('  ')}
          </p>
        </div>
      </div>

      <div className='ingredients-and-instructions'>
          <div className="ingredients">
            <h3>Ingredients</h3>
              <ul>
                {recipeWithoutId.ingredients?.map((item, index) => (
                 <li key={index}>{item}</li>
                ))}
              </ul>
          </div>
          <div className="instructions">
            <h3>Instructions</h3>
              <ol>
                {recipeWithoutId.instructions?.map((item, index) => (
                 <li key={index}>{item}</li>
                ))}
              </ol>
          </div>
        </div>
    </div>
  );
}
