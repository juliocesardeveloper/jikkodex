import { types } from "../types/types";

const initialState = {
  openModal: false,
}

export const uiReducer = ( state = initialState, action ) => {

  switch ( action.type ) {
    case types.uiOpenModal:
      return {
        ...state,
        openModal: true
      }
  
    default:
      return state;
  }

}