import {createSlice} from "@reduxjs/toolkit";
 const userSlice = createSlice({
    name:"full",
    initialState:{
        fullUser:[]
    },
    reducers:{
      setCurrentBook:(state,action)=>{
        state.fullUser = action.payload
      }
    }
})
export const showUser = (state) => state.user.fullUser
export const {setCurrentBook} = userSlice.actions;
export default userSlice.reducer;


export const selectSome = (state) => state.cart.itemsInCart ;