import { types } from "../types/types";


export const uiOpenModal = () => ({ type: types.uiOpenModal });
export const uiCloseModal = () => ({ type: types.uiCloseModal });
export const uiJikkomonData = ( id, name, image, type, abilities )  => ({
  type: types.uiJikkomonData,
  payload: {
    id,
    name,
    image,
    type,
    abilities
  }
});

