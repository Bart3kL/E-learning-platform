import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {
  enteredEmail: '',
  enteredEmailTouched: false,
  enteredPassword: '',
  enteredPasswordTouched: false,
};

const auth = createSlice({
  name: 'counter',
  initialState: initialState,
  reducers: {
    enteredEmail(state, action) {
      state.enteredEmail = action.payload;
    },
    enteredEmailTouchedTrue(state) {
      state.enteredEmailTouched = true;
    },
    enteredEmailTouchedFalse(state) {
      state.enteredEmailTouched = false;
    },
    enteredPassword(state, action) {
      state.enteredPassword = action.payload;
    },
    enteredPasswordTouchedTrue(state) {
      state.enteredPasswordTouched = true;
    },
    enteredPasswordTouchedFalse(state) {
      state.enteredPasswordTouched = false;
    },
  },
});

const store = configureStore({
  reducer: auth.reducer,
});

export const authActions = auth.actions;
export default store;
