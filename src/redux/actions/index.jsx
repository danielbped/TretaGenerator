export const ADD_NAME = "ADD_NAME";
export const ADD_FOOD = "ADD_FOOD";
export const ADD_PREFERENCE = "ADD_PREFERENCE";
export const ADD_ANIMAL = "ADD_ANIMAL";

export const addName = (name) => ({type: ADD_NAME, payload: name})
export const addFood = (food) => ({type: ADD_FOOD, payload: food})
export const addPreference = (preference) => ({type: ADD_PREFERENCE, payload: preference})
export const addAnimal = (animal) => ({type: ADD_ANIMAL, payload: animal})