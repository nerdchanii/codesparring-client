import { createAction, createSlice } from "@reduxjs/toolkit";
import { defaultIdeOption } from '../../config/ide.config';


/**
 * if ideOption is 
 */
const initialState =
  localStorage.getItem("ideOption") ?
    JSON.parse(localStorage.getItem("ideOption")) : defaultIdeOption;



const ideOptionSlice = createSlice({
  name: "ideOption",
  initialState,
  reducers: {
    setIdeOption: (state, action) => {
      console.log(action.payload)
      state = {
        ...state,
        [action.payload.key]: action.payload.value
      }
      localStorage.setItem("ideOption", JSON.stringify(state));
      return state
    }
  }
});

const { reducer, actions } = ideOptionSlice;
export const { setIdeOption } = actions;
export default reducer;




