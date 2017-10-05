export const RESET_TIMER = 'RESET_TIMER'

export default (timer) => {
  return {
    type: RESET_TIMER,
    payload: timer
  }
}
