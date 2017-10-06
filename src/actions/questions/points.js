
import API from '../../api'
import {
  LOAD_ERROR,
} from '../loading'

const api = new API()
export const ADD_POINTS = 'ADD_POINTS'

export default (gameId, answer) => {
  return (dispatch) => {
    const backend = api.service('games')
    api.app.authenticate()
      .then((result) => {
        backend.patch(gameId, { type: ADD_POINTS })
        .then(() => {
          dispatch({
            type: ADD_POINTS,
            payload: answer
          })
        })
        .catch((error) => {
          dispatch({
            type: LOAD_ERROR,
            payload: error.message
          })
        })
      })
      .catch((error) => {
        dispatch({
          type: LOAD_ERROR,
          payload: error.message
        })
      })
  }
}
