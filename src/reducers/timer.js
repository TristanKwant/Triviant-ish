import { TIMER } from '../actions/timer'

const randomId = () => {
  return ['question', new Date().getTime()].join('')
}

export default (state = 10, { type, payload } = {}) => {
  switch(type) {

    case TIMER :
      return state = 0

    default :
      return state

  }
}
