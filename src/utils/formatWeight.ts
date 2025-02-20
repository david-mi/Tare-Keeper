export function formatWeight(weightInGrams: number) {
  const weightToString = String(weightInGrams);

  return weightToString.length > 3
    ? weightInGrams / 1000 + " kg"
    : weightInGrams + " g";
}