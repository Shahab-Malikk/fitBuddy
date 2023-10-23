import favouriteMealSlice, {
  addFavMeal,
  removeFavMeal,
} from "./favouriteMealSlice"; // Import your slice

describe("Favourite Meal Slice", () => {
  it("should add a favorite meal", () => {
    const initialState = { favouriteMeals: [] };
    const mealToAdd = { id: 1, name: "Pasta" };

    // Call the reducer with the initial state and the action
    const newState = favouriteMealSlice(initialState, addFavMeal(mealToAdd));

    // Expect the state to have the new meal in the favoriteMeals array
    expect(newState.favouriteMeals).toContainEqual(mealToAdd);
  });

  it("should remove a favorite meal", () => {
    const initialState = {
      favouriteMeals: [
        { id: 1, name: "Pasta" },
        { id: 2, name: "Pizza" },
      ],
    };
    const mealToRemove = { id: 1, name: "Pasta" };

    // Call the reducer with the initial state and the action
    const newState = favouriteMealSlice(
      initialState,
      removeFavMeal(mealToRemove)
    );

    // Expect the state not to contain the removed meal
    expect(newState.favouriteMeals).not.toContainEqual(mealToRemove);

    // Expect the state to still contain the other meal (Pizza in this case)
    expect(newState.favouriteMeals).toContainEqual({ id: 2, name: "Pizza" });
  });
});
