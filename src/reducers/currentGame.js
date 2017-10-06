import { GET_GAME } from '../actions/games/get'
import { JOIN_GAME } from '../actions/games/join'
import { ADD_POINTS } from '../actions/questions/points'

export default (state = null, { type, payload } = {}) => {
  switch (type) {
    case JOIN_GAME :
    case ADD_POINTS :
      return state
    case GET_GAME :
      return payload._id

    default :
      return state
  }
}
