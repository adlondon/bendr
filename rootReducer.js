import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import CategoryReducer from './src/components/Category/CategoryReducer';

const rootReducer = combineReducers({
  state: (state = {}) => state,
  form,
  CategoryReducer
});

export default rootReducer;
