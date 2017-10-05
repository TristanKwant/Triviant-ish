import { SCOREBOARD } from '../actions/scoreboard'

export default (state = null, {type, payload} = {}) => {
 switch(type) {

   case SCOREBOARD
     return payload
default :
  return state
  }
}
