import { FETCHED_QUESTIONS } from '../actions/games/question'
import {
  GAME_CREATED,
  GAME_UPDATED,
  GAME_REMOVED
} from '../actions/games/subscribe'

export default (state = [], { type, payload } = {}) => {
  switch (type) {
    case FETCHED_QUESTIONS :
      return [ ...payload ]

    default :
      return state

  }
}
