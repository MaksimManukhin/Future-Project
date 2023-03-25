import {createSlice} from "@reduxjs/toolkit";



 const cartSlice = createSlice({
    name:"cart",
    initialState:{
        itemsInCart:[]
    },
    reducers:{
        setItemInCart:(state,action)=>{
            const findItem = state.itemsInCart.find(obj=>obj.id===action.payload.id);
            if(findItem){
                findItem.count++
            }else{
            state.itemsInCart.push({
               ...action.payload,
               count:1
            })
            }
        },

        removeItemFromCart:(state,action)=>{
         state.itemsInCart = state.itemsInCart.filter(book=>book.id !==action.payload)
        },
        clearAll:(state)=>{
            state.itemsInCart = []
        },
        plusItem:(state,action)=>{
            const findItem = state.itemsInCart.find(obj=>obj.id==action.payload);
           if(findItem){
            findItem.count++
           }
        },
        minusItem:(state,action)=>{
            const findItem = state.itemsInCart.find(obj=>obj.id==action.payload);
            if(findItem){
             findItem.count--
            }
        }
    }
})

export const selectSome = (state) => state.cart.itemsInCart ;
export const selectSomeItem = (state,id) => state.cart.itemsInCart.find(obj=>obj.id === id)
export const {setItemInCart,removeItemFromCart,clearAll,plusItem,minusItem} = cartSlice.actions;
export default cartSlice.reducer;





