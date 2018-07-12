export const UPDATE_USER = '[User] update'

export const updateUser = (message: string) => dispatch => {
  return dispatch({
    type: UPDATE_USER, message
  })
}
