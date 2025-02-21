export function formatWeight(weightInGrams: number) {
  return weightInGrams + " g";

  return weightToString.length > 3
    ? weightInGrams / 1000 + " kg"
    : weightInGrams + " g";
}