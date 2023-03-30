import groceriesList from "./9-groceries_list.js";

test("map has a key 'Apples' that maps to 10", () => {
  const map = groceriesList();
  expect(map.get('Apples')).toBe(10);
});