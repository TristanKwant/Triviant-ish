import { FETCHED_QUESTIONS } from '../actions/questions/fetch.js'

export default (state = [], { type, payload } = {}) => {
  switch(type) {
    case FETCHED_QUESTIONS :
      return [].concat(payload)

    default :
      return state
  }
}
