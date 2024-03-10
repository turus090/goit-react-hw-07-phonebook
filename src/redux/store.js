import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './slices/contacts';

const store = configureStore({
  reducer: {
    contawcts: contactsReducer,
  },
});

export default store;
