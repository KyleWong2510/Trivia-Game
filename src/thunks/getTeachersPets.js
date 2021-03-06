import { isLoading, hasErrored, setTeachersPets } from '../actions'

export const getTeachersPets = () => {
  const url = 'https://chalkboard-trivia.herokuapp.com/api/v1/scores'

  return async (dispatch) => {
    try {
      const response = await fetch(url)
      if (!response.ok) {
        throw Error(response.statusText)
      }
      const data = await response.json()
      dispatch(setTeachersPets(data.scores))
    } catch (error) {
      dispatch(hasErrored(error.message))
    }
  }
}