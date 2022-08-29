import axios from 'axios';
import creatAsyncThunk from '@reduxjs/toolkit';

FETCH_DATA = 'secnewshub/countries/FETCH_DATA';

initialState = {
  countries: [],
  loading: false,
  error: null,
};

const countriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${FETCH_DATA}/fulfilled`:
      return action.payload;
    default:
      return state;
  };
};

export default countriesReducer;