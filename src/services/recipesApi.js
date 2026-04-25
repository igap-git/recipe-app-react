import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const recipesApi = createApi({
  reducerPath: 'recipesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
  endpoints: (build) => ({
    getRecipes: build.query({
      query: () => 'recipes',
      transformResponse: (response) => response.recipes,
    }),
  }),
});

export const { useGetRecipesQuery } = recipesApi;
