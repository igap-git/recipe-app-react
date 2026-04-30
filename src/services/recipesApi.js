import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const recipesApi = createApi({
  reducerPath: 'recipesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
  endpoints: (build) => ({
    getRecipes: build.query({
      query: () => ({
        url: 'recipes',
      }),
      transformResponse: (response) => response.recipes,
    }),
    getRecipeById: build.query({
      query: (id) => `recipes/${id}`,
    }),
  }),
});
export const { useGetRecipesQuery, useGetRecipeByIdQuery } = recipesApi;
