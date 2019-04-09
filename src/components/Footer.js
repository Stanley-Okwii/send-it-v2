import React from 'react'
import FilterLink from '../containers/FilterLink'
// import ToggleButton from '../containers/ToggleButton';
import { VisibilityFilters } from '../actions'

const Footer = () => (
  <div>
    <span>Show: </span>
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
    <span>Welcome to send it, its still a work in progress </span>
  </div>
)

export default Footer
