import {createSlice} from "@reduxjs/toolkit";
 const booksSlice = createSlice({
    name:"books",
    initialState:{
        currentBook: null
    },
    reducers:{
      setCurrentBook:(state,action)=>{
        state.currentGame = action.payload
      }
    }
})
export const {setCurrentBook} = booksSlice.actions;
export default booksSlice.reducer;
