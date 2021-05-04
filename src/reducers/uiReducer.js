import { types } from "../types/types";

const initialState = {
  openModal: false,
  jikkomon: null
}

export const uiReducer = ( state = initialState, action ) => {

  switch ( action.type ) {
    case types.uiOpenModal:
      return {
        ...state,
        openModal: true
      }

    case types.uiCloseModal:
      return {
        ...state,
        openModal: false
      }

    case types.uiJikkomonData:
      return {
        ...state,
        jikkomon: action.payload
      }

    default:
      return state;
  }

}