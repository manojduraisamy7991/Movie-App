// Import Redux
import * as ActionType from '../actionTypes/actionConstants';

// ----------------------------------------------------------------------

const initialState = {
  data: [],
  totalCount: '',
  limit: '',
  loading: false,
  error: '',
};

// ----------------------------------------------------------------------

function searchActorListReducer(state = initialState, action) {
  switch (action.type) {
    case ActionType.SEARCH_MOVIE_LIST_LOAD:
      return {
        ...state,
        error: action.payload,
        loading: true,
      };
    case ActionType.SEARCH_MOVIE_LIST_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        totalCount: action.payload.total_count,
        limit: action.payload.limit,
      };
    case ActionType.SEARCH_MOVIE_LIST_FAILURE:
      return {
        ...state,
        data: [],
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}

export default searchActorListReducer;
