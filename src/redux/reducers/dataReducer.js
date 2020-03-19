import {
  SET_SCREAMS,
  LIKE_SCREAM,
  UNLIKE_SCREAM,
  LOADING_DATA,
  DELETE_SCREAM,
  POST_SCREAM,
  SET_SCREAM,
  SUBMIT_COMMENT,
  SET_RENTALPOINTS,
  SET_RENTALS,
  POST_RENTAL
} from '../types';

const initialState = {
  screams: [],
  scream: {},
  rentalpoints: [],
  rentals: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOADING_DATA:
      return {
        ...state,
        loading: true
      };
    case SET_SCREAMS:
      return {
        ...state,
        screams: action.payload,
        loading: false
      };
    case SET_SCREAM:
      return {
        ...state,
        scream: action.payload
      };
    case LIKE_SCREAM:
    case UNLIKE_SCREAM:
      let index = state.screams.findIndex(
        scream => scream.screamId === action.payload.screamId
      );
      state.screams[index] = action.payload;
      if (state.scream.screamId === action.payload.screamId) {
        state.scream = action.payload;
      }
      return {
        ...state
      };
    case DELETE_SCREAM:
      index = state.screams.findIndex(
        scream => scream.screamId === action.payload
      );
      state.screams.splice(index, 1);
      return {
        ...state
      };
    case POST_SCREAM:
      return {
        ...state,
        screams: [action.payload, ...state.screams]
      };
    case SUBMIT_COMMENT:
      return {
        ...state,
        scream: {
          ...state.scream,
          comments: [action.payload, ...state.scream.comments]
        }
      };
    case SET_RENTALPOINTS:
      return {
        ...state,
        rentalpoints: action.payload,
        loading: false
      };
    case SET_RENTALS:
      return {
        ...state,
        rentalTransactions: action.payload,
        loading: false
      };
      case POST_RENTAL:
        console.log("Data Reducer")
        console.log(...state.rentals)
      return {
        ...state,
        rentals: [action.payload, ...state.rentals]
      };
    default:
      return state;
  }
}
