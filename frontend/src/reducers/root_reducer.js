import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import EntitiesReducer from './entities_reducer';

const RootReducer = combineReducers({
  session,
  errors,
  entities: EntitiesReducer
});

export default RootReducer;