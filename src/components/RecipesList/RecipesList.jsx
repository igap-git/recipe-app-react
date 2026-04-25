import Card from '../Card/Card.jsx';
import { useGetRecipesQuery } from '../../services/recipesApi.js';
import './RecipesList.css';
import React from 'react';

export default function RecipesList() {
  const { data, error, isLoading } = useGetRecipesQuery();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <div className="recipes-block-display">
      {data?.map((r) => (
        <Card key={r.id} SourceImage={r.image} title={r.name} />
      ))}
    </div>
  );
}
