export const selectUniqueValues = (recipes = [], key) => {
  const flat = recipes.flatMap((r) => {
    const value = r[key];

    if (!value) return [];

    if (Array.isArray(value)) return value;

    return [value];
  });

  const uniqueSorted = [...new Set(flat)]
    .map((v) => v.trim())
    .filter(Boolean)
    .sort((a, b) => a.localeCompare(b));

  return uniqueSorted.map((v) => ({
    label: v,
    value: v,
  }));
};
