import API from '../../api'

export const FETCHED_QUESTIONS = 'FETCHED_QUESTIONS'

const api = new API()

export default () => {
  return (dispatch) => {
    const backend = api.service('questions')
    backend.find({
      query: {
        $limit: 5,
        $sort: {
          createdAt: -1
        }
      }
    })
    .then((result) => {
      console.log(result)
      dispatch({
        type: FETCHED_QUESTIONS,
        payload: result.data
      })
    })
    .catch((error) => {
      // error handling!
    })
  }
}
