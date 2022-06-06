import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";



const fetchTodos = createAsyncThunk("todo/fetchTodosStatus", async () => {
  const res = await fetch("https://rcz-vam-1.herokuapp.com/api/getregdata?fromCollectionId=thilakrajCollection");
  const todos = await res.json();
  return todos;
});





export const dataSlice = createSlice({
  name: "dataFromDataBase",
  initialState: {
    data: [],
  },
  
  extraReducers: {
    
    [fetchTodos.fulfilled] : (state, action) => {
      state.data = action.payload;
    }
   
  }
});







export default dataSlice.reducer;

export { fetchTodos };