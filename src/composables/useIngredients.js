const breads = ["white", "wheat", "multigrain", "sourdough", "rye"];
const cheeses = ["american", "cheddar", "swiss", "provolone", "mozzarella"];
const veggies = [
  "lettuce",
  "tomato",
  "spinach",
  "banana pepper",
  "onion",
  "gherkin",
  "pepper relish",
];
const meats = [
  "turkey",
  "ham",
  "chicken breast",
  "bacon",
  "roast beef",
  "pastrami",
];
const sauces = [
  "mayo",
  "mustard",
  "thousand island",
  "chipotle mayo",
  "dijon mustard",
  "honey mustard",
];

export const useIngredients = () => {
  return { breads, cheeses, veggies, meats, sauces };
};
