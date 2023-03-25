import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"


interface CartItem  {
    createdAt:string,
    name:string,
    id:string,
    quoto:string,
    avatar:string,
}


type FetchParams = Record<string,string>

 export const fetchBook = createAsyncThunk(
    `book/fetchBook`,
   async (params:FetchParams) => {
        const {pageCount,searching} = params
        const {data} = await axios.get<CartItem[]>(`https://63ceddf2fdfe2764c72c019f.mockapi.io/items?page=${pageCount}&limit=4&${searching}`)
       return data 
        
    }
)



export enum Status  {
    LOADING = "loading",
    SUCCESS = "success",
    ERROR = "error"
}


const initialState = {
    items : [],
    status: Status
};

const boomSlice = createSlice({
    name:"book",
    initialState,
    reducers:{
        setEveryItems:(state,action)=>{
            state.items = action.payload;
        }
    },
    extraReducers : (builder)=> {
       builder.addCase(fetchBook.pending,(state,action) => {
            state.status = Status.LOADING
       });

       builder.addCase(fetchBook.fulfilled,(state,action) => {
        state.items = action.payload;
         state.status = Status.SUCCESS
   });


   builder.addCase(fetchBook.rejected,(state,action) => {
    state.items = [];
    state.status = Status.ERROR
});
 }
})


export const {setEveryItems} = boomSlice.actions;
export default boomSlice.reducer ;


//extraReducers : {
  //  [fetchBook.pending] : (state) => {
   //     state.status = `loading`
    //  },
   //   [fetchBook.fulfilled] : (state,action) => {
   //     state.items = action.payload;
   //     state.status = "success"
    //  },
    //  [fetchBook.rejected] : (state) => {
    ///      state.items = [];
    //      state.status = `error`
    // }
//}

//});