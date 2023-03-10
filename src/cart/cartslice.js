import { createSlice } from "@reduxjs/toolkit";

const initialstate = {
    cartitems: [],
    amount:0,
    total:0,
    isloading: true,
}

const cartslice = createSlice({
    name:'cart',
    initialstate
})

export default cartslice.reducer;