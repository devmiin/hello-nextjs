import { IUser } from './user.state';
import * as userActions from './user.action';


const initialState: IUser = {
  message: 'Initial user..'
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case userActions.UPDATE_USER:
      return Object.assign({}, state, { message: action.message })
    default: return state
  }
}
