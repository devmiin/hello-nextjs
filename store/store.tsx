import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import { reducer as userReducer } from './user/user.reducer'
import { reducer as aboutReducer } from './about/about.reducer'

// single reducer
// export const initStore = (initialState) => {
//   return createStore(
//     userReducer, 
//     initialState, 
//     composeWithDevTools(applyMiddleware(thunkMiddleware))
//   )
// }

// multiple reducers
export const initStore = initial => {
  return createStore(
    combineReducers({
      user: userReducer,
      about: aboutReducer,
    }),
    initial,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
};