import savedMealSlice, { addMeal, removeMeal } from "./savedMealSlice"; // Import your slice

describe("Saved Meal Slice", () => {
  it("should add a saved meal", () => {
    const initialState = { savedMeals: [] };
    const mealToAdd = { id: 1, name: "Chicken Rice" };

    // Call the reducer with the initial state and the action
    const newState = savedMealSlice(initialState, addMeal(mealToAdd));

    // Expect the state to have the new meal in the savedMeals array
    expect(newState.savedMeals).toContainEqual(mealToAdd);
  });

  it("should remove a saved meal", () => {
    const initialState = {
      savedMeals: [
        { id: 1, name: "Chicken Rice" },
        { id: 2, name: "Spaghetti" },
      ],
    };
    const mealToRemove = { id: 1, name: "Chicken Rice" };

    // Call the reducer with the initial state and the action
    const newState = savedMealSlice(initialState, removeMeal(mealToRemove));

    // Expect the state not to contain the removed meal
    expect(newState.savedMeals).not.toContainEqual(mealToRemove);

    // Expect the state to still contain the other meal (Spaghetti in this case)
    expect(newState.savedMeals).toContainEqual({ id: 2, name: "Spaghetti" });
  });
});
