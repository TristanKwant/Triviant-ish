import { NEW_QUESTIONNR } from '../actions/questionNr/addNr'

export default (state = 0, { type, payload } = {}) => {
  switch(type) {
    case NEW_QUESTIONNR :
      return payload

    default :
      return state
  }
}
