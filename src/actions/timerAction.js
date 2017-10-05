export const TIMER = 'TIMER'

export default (timer) => {
  return {
    type: TIMER,
    payload: timer
  }
}
