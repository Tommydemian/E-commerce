import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState:{value:{currentUser:null}},
  reducers:{
      setUser: (state, action) =>{
          
      }
  }
});
