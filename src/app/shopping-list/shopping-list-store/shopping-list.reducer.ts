import { Ingredient } from "../../shared/ingredient.model";
import * as actions from "./shopping-list.actions";

const initialState = {
  ingredients: [new Ingredient("Apples", 5), new Ingredient("Tomatoes", 10)],
};

export function shoppingListReducer(
  state = initialState,
  action: actions.shopplingListAction
) {
  switch (action.type) {
    case actions.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload],
      };
    case actions.ADD_INGREDIENTS:
      return {
        ...state,
        ingredients: [...state.ingredients, ...action.payload],
      };
    case actions.UPDATE_INGREDIENT:
      const newIngredients = [...state.ingredients];
      newIngredients[action.index] = action.ingredient;
      return {
        ...state,
        ingredients: newIngredients,
      };
    case actions.DELETE_INGREDIENT:
      state.ingredients.splice(action.payload, 1);
      return {
        ...state,
        ingredients: [...state.ingredients],
      };
    default:
      return state;
  }
}
