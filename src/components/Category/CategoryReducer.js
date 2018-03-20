import { LOADING } from './CategoryTypes';

export default (state = { loading: false }, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
