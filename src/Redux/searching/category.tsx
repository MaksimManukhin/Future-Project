import { createSlice, PayloadAction } from "@reduxjs/toolkit"



export type CartItem = {
    name:string,
    avatar?: any,
    id:number,
    count?:number
}

interface cartSlice  {
    pageCount: number,
    search: string,
    shop: CartItem[]
}



const initialState:cartSlice={
  pageCount:1,
   search:"",
   shop: [],
}

const filterSlice = createSlice({
    name:"seacrh",
    initialState,
    reducers:{
        setPageCount:(state,action)=>{
            state.pageCount = action.payload
        },
        setSearch:(state,action)=>{
            state.search = action.payload
        },
        setShopping:(state,action:PayloadAction<CartItem>)=>{
            state.shop.push(action.payload)
        },
       setFilters:(state,action)=>{
        state.pageCount = action.payload.pageCount; 
        state.search = action.payload.search
       },
    
       
    }
})
export const selectShop = (state) => state.search.shop ;
export const {setPageCount,setSearch,setShopping,setFilters} = filterSlice.actions;
export default filterSlice.reducer