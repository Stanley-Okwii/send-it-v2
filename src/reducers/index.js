import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import isLogInTab from './isLoginTab'

export default combineReducers({
  todos,
  visibilityFilter,
  isLogInTab
})
