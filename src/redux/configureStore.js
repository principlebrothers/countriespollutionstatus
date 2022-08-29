import {configureStore, combineReducers} from '@reduxjs/toolkit';
import countriesReducer from './countries/countries';
import thunk from 'redux-thunk';


const rootReducer = combineReducers({
  countries: countriesReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export default store;