import {
  ADD_NAME,
  ADD_FOOD,
  ADD_PREFERENCE,
  ADD_ANIMAL,
} from '../actions/'

const INITIAL_STATE = {
  animal: '',
  food: '',
  name: '',
  preference: '',
};

function formFill (state = INITIAL_STATE, action) {
  switch(action.type) {
    case ADD_ANIMAL:
      return {
        ...state,
        animal: action.payload,
      }
    case ADD_FOOD:
      return {
        ...state,
        food: action.payload,
      }
    case ADD_NAME:
      return {
        ...state,
        name: action.payload,
      }
    case ADD_PREFERENCE:
      return {
        ...state,
        preference: action.payload,
      }
    default:
      return state;
  }
}

export default formFill;