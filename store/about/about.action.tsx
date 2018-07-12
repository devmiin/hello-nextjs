export const UPDATE_ABOUT = '[About] update'

export const updateAbout = (name: string) => dispatch => {
  return dispatch({
    type: UPDATE_ABOUT, name
  })
}
