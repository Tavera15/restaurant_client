import { applyMiddleware, combineReducers, configureStore } from '@reduxjs/toolkit'
import tokenReducer from './Features/TokenSlice'
import cartReducer from './Features/CartSlice'
import { thunk } from 'redux-thunk'

export default configureStore({
  reducer: {
    cart: cartReducer,
    token: tokenReducer,
  },
}, applyMiddleware(thunk));
