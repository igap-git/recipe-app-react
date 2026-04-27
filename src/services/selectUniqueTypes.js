export const selectUniqueValues = (recipes = [], key) => {
  const flat = recipes.flatMap((r) => {
    const value = r[key];

    if (!value) return [];

    if (Array.isArray(value)) return value;

    return [value];
  });

  const floorValues = [...new Set(flat)]
  .map((v) => {
    const num = Number(v);
    if (!isNaN(num)) {
      return Math.floor(num);
    }
    return String(v).trim();
  })

  const uniqueSorted = [...new Set(floorValues)]
    .filter((v) => v !== null && v !== undefined)
    .map((v) => {return String(v).trim();})
    .filter((v) => v !== '' && v !== null)
    .sort((a, b) => String(a).localeCompare(String(b), undefined, { numeric: true }));

  return uniqueSorted.map((v) => ({
    label: v,
    value: v,
  }));
};
