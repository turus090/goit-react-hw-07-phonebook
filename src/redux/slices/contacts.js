import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getContacts, deleteContact, addContact } from 'api/contacts';

const initialState = {
  list: [
    {
      id: 1,
      name: 'John',
      phone: '123-456',
    },
  ],
  filter: '',
};

export const fetchContactsData = createAsyncThunk(
  'contacts/fetchContactsData',
  async (_, thunkAPI) => {
    const response = await getContacts();
    return response;
  }
);

export const deleteContactData = createAsyncThunk(
  'contacts/deleteContactData',
  async idCandidate => {
    await deleteContact(idCandidate);
    return idCandidate;
  }
);

export const addContactData = createAsyncThunk(
  'contacts/addContactData',
  async candidate => {
    const response = await addContact(candidate);
    return response;
  }
);
const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchContactsData.fulfilled, (state, action) => {
      state.list = action.payload;
    });
    builder.addCase(deleteContactData.fulfilled, (state, action) => {
      state.list = state.list.filter(contact => contact.id !== action.payload);
    });
    builder.addCase(addContactData.fulfilled, (state, action) => {
      state.list = [...state.list, action.payload];
    });
  },
});

export const { changeFilter } = contactsSlice.actions;

export default contactsSlice.reducer;
