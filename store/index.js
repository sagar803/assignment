
import { createSlice } from '@reduxjs/toolkit';



export const contactUsSlice = createSlice({
  name: 'contactUs',
  initialState: {
    name: '',
    mobileNumber: '',
    email: '',
    message: '',
  },
  reducers: {
    updateField: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
    resetForm: (state) => {
      return {
        name: '',
        mobileNumber: '',
        email: '',
        message: '',
      };
    },
  },
});

export const { updateField, resetForm } = contactUsSlice.actions;
export default contactUsSlice.reducer;