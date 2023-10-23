import { lowFatMeals, highProteinMeals } from "./mealSlice"; // Import your slice

describe("Meal Slice", () => {
  // Set up an initial state for testing with sample meals
  const initialState = {
    meals: [
      {
        id: "bm1",
        type: "breakfast",
        category: "low fat",
        name: "Oatmeal with fruits",
        imgUrl: "bm6.jpg",
      },
      {
        id: "bm2",
        type: "breakfast",
        category: "high protein",
        name: "Egg and avocado toast",
        imgUrl: "bm1.jpg",
      },
      // Add more sample meals here
    ],
  };

  it("should select low fat meals", () => {
    const state = { meal: initialState };
    const selectedMeals = lowFatMeals(state);

    expect(selectedMeals).toEqual([
      {
        id: "bm1",
        type: "breakfast",
        category: "low fat",
        name: "Oatmeal with fruits",
        imgUrl: "bm6.jpg",
      },
    ]);
  });

  it("should select high protein meals", () => {
    const state = { meal: initialState };
    const selectedMeals = highProteinMeals(state);

    expect(selectedMeals).toEqual([
      {
        id: "bm2",
        type: "breakfast",
        category: "high protein",
        name: "Egg and avocado toast",
        imgUrl: "bm1.jpg",
      },
    ]);
  });
});
