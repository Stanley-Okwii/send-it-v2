import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import toggleTab from './toggleTab'

export default combineReducers({
  todos,
  visibilityFilter,
  toggleTab
})
