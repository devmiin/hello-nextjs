import { IAbout } from './about.state';
import * as userActions from './about.action';

const initialState: IAbout = {
  name: 'Initial about..'
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case userActions.UPDATE_ABOUT:
      return Object.assign({}, state, { name: action.name })
    default: return state
  }
}
