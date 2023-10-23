import profileSlice, {
  setUserName,
  setGender,
  setWeightHeight,
  setGoals,
} from "./profileSlice"; // Import your slice

describe("Profile Slice", () => {
  it("should set the user's name", () => {
    const initialState = {
      personData: [
        {
          name: null,
          gender: null,
          weight: null,
          height: null,
          goals: null,
        },
      ],
    };
    const newName = "John Doe";

    // Call the reducer with the initial state and the action
    const newState = profileSlice(initialState, setUserName(newName));

    // Expect the state to have the new name set
    expect(newState.personData[0].name).toEqual(newName);
  });

  it("should set the user's gender", () => {
    const initialState = {
      personData: [
        {
          name: null,
          gender: null,
          weight: null,
          height: null,
          goals: null,
        },
      ],
    };
    const newGender = "Male";

    // Call the reducer with the initial state and the action
    const newState = profileSlice(initialState, setGender(newGender));

    // Expect the state to have the new gender set
    expect(newState.personData[0].gender).toEqual(newGender);
  });

  it("should set the user's weight and height", () => {
    const initialState = {
      personData: [
        {
          name: null,
          gender: null,
          weight: null,
          height: null,
          goals: null,
        },
      ],
    };
    const newWeightHeight = { weight: 150, height: 175 };

    // Call the reducer with the initial state and the action
    const newState = profileSlice(
      initialState,
      setWeightHeight(newWeightHeight)
    );

    // Expect the state to have the new weight and height set
    expect(newState.personData[0].weight).toEqual(newWeightHeight.weight);
    expect(newState.personData[0].height).toEqual(newWeightHeight.height);
  });

  it("should set the user's goals", () => {
    const initialState = {
      personData: [
        {
          name: null,
          gender: null,
          weight: null,
          height: null,
          goals: null,
        },
      ],
    };
    const newGoals = "Lose weight";

    // Call the reducer with the initial state and the action
    const newState = profileSlice(initialState, setGoals(newGoals));

    // Expect the state to have the new goals set
    expect(newState.personData[0].goals).toEqual(newGoals);
  });
});
