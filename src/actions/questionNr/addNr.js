export const NEW_QUESTIONNR = 'NEW_QUESTIONNR'

export default (nr) => {
  return {
    type: NEW_QUESTIONNR,
    payload: nr
  }
}
