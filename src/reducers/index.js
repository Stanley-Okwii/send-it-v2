import { combineReducers } from 'redux';
import { signUp, login, loading } from './Registration';
import { addParcel } from './ParcelReducer';

export default combineReducers({
  registration: signUp,
  isloggedin: login,
  loading,
  newParcel: addParcel
});
