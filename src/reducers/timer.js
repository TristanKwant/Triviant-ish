import { TIMER } from '../actions/timerAction'
import { RESET_TIMER } from '../actions/resettimer'

const randomId = () => {
  return ['question', new Date().getTime()].join('')
}

export default (state = 10, { type, payload } = {}) => {
  switch(type) {

    case TIMER :
      return state = payload

    case RESET_TIMER :
      return state = 10

    default :
      return state

  }
}
