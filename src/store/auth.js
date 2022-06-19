import { createSlice, configureStore } from '@reduxjs/toolkit';

const authState = {
  enteredEmail: '',
  enteredEmailTouched: false,
  enteredPassword: '',
  enteredPasswordTouched: false,
  logged: false,
};

const auth = createSlice({
  name: 'counter',
  initialState: authState,
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
    logged(state) {
      state.logged = !state.logged;
    },
  },
});

const modalState = {
  modalWindow: false,
  modalWindowText: '',
};

const modal = createSlice({
  name: 'modal',
  initialState: modalState,
  reducers: {
    showModalWindow(state) {
      state.modalWindow = true;
    },
    hideModalWindow(state) {
      state.modalWindow = false;
    },
    modalWindowText(state, action) {
      state.modalWindowText = action.payload;
    },
  },
});
const spinnerState = {
  activation: false,
};
const spinner = createSlice({
  name: 'spinner',
  initialState: spinnerState,
  reducers: {
    activeSpinner(state) {
      state.activation = true;
    },
    deactivateSpinner(state) {
      state.activation = false;
    },
  },
});

const store = configureStore({
  reducer: {
    auth: auth.reducer,
    modal: modal.reducer,
    spinner: spinner.reducer,
  },
});

export const authActions = auth.actions;
export const modalActions = modal.actions;
export const spinnerActions = spinner.actions;
export default store;
