import React from 'react'
import FilterLink from '../containers/FilterLink'
import ToggleTab from '../containers/ToggleTab';
import { VisibilityFilters } from '../actions'

const Footer = () => (
  <div>
    <span>Show: </span>
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
    <ToggleTab/>
  </div>
)

export default Footer
