// Import Services
import axiosInstance from '../../helpers/axios/axiosInstance';
// Import Redux
import * as ActionTypes from '../actionTypes/actionConstants';

// ----------------------------------------------------------------------

const searchMovieListLoad = () => ({
  type: ActionTypes.SEARCH_MOVIE_LIST_LOAD,
});

const searchMovieListSuccess = (body) => ({
  type: ActionTypes.SEARCH_MOVIE_LIST_SUCCESS,
  payload: body,
});

const searchMovieListFailure = (error) => ({
  type: ActionTypes.SEARCH_MOVIE_LIST_FAILURE,
  payload: error,
});

export const searchActorList = (valuess) => (dispatch) => {
  dispatch(searchMovieListLoad());
  const url = `person/${valuess}/movie_credits?language=en-US`;
  return axiosInstance.get(url).then(
    (response) => {
      dispatch(searchMovieListSuccess(response.data.cast));
    },
    (error) => {
      dispatch(searchMovieListFailure(error.response.data.status_message));
    }
  );
};
