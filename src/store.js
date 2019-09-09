import { createStore } from "redux";

const initialState = {
  name: "",
  category: "",
  authorFirst: "",
  authorLast: "",
  ingredients: [],
  instructions: [],
  recipes: []
};

export const UPDATE_NAME = "UPDATE_NAME";
export const UPDATE_CATEGORY = "UPDATE_CATEGORY";
export const UPDATE_AUTHOR_FIRST = "UPDATE_AUTHOR_FIRST";
export const UPDATE_AUTHOR_LAST = "UPDATE_AUTHOR_LAST";
export const UPDATE_INGREDIENTS = "UPDATE_INGREDIENTS";
export const UPDATE_INSTRUCTIONS = "UPDATE_INSTRUCTIONS";
export const UPDATE_RECIPE = "UPDATE_RECIPE";

function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case UPDATE_NAME:
      return {
        ...state,
        name: action.payload
      };
    case UPDATE_CATEGORY:
      return {
        ...state,
        category: action.payload
      };
    case UPDATE_AUTHOR_FIRST:
      return {
        ...state,
        authorFirst: action.payload
      };
    case UPDATE_AUTHOR_LAST:
      return {
        ...state,
        authorLast: action.payload
      };
    case UPDATE_INGREDIENTS:
      const newIngredients = [...state.ingredients, payload];
      return {
        ...state,
        ingredients: newIngredients
      };
    case UPDATE_INSTRUCTIONS:
      const newInstructions = [...state.instructions, payload];
      return {
        ...state,
        instructions: newInstructions
      };
    case UPDATE_RECIPE:
      const {
        name,
        category,
        authorFirst,
        authorLast,
        ingredients,
        instructions
      } = state;
      const recipe = {
        name,
        category,
        authorFirst,
        authorLast,
        ingredients,
        instructions
      };
      const newRecipes = [...state.recipes, recipe];
      return { ...state, recipes: newRecipes };

    default:
      return state;
  }
}

export default createStore(reducer);
