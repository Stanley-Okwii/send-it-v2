import { combineReducers } from "redux";
import {
  signUp,
  login,
  loading,
  loadingParcel,
  isLoginTab
} from "./Registration";
import { addParcel, fetchParcels } from "./ParcelReducer";

export default combineReducers({
  registration: signUp,
  isloggedin: login,
  loadingParcel,
  loading,
  isLogInTab: isLoginTab,
  newParcel: addParcel,
  allParcels: fetchParcels
});
