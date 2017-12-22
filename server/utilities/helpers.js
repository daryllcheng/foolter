export default function filterFoodsByNurtients(food, { protein, fat, carb, sugar }) {
  return (
    isInRange(nutrientsByGrams(1, food), protein) &&
    isInRange(nutrientsByGrams(2, food), fat) &&
    isInRange(nutrientsByGrams(3, food), carb) &&
    isInRange(nutrientsByGrams(4, food), sugar)
  )
}

function nutrientsByGrams(index, food) {
  return food.nutrients[index].gm == '--' ? 0 : food.nutrients[index].gm;
}

function isInRange(nutrient, nutrientRange) {
  return nutrient >= nutrientRange[0] && nutrient <= nutrientRange[1];
}