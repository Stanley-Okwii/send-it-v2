const toggleTab = (state = true, action) => {
    switch (action.type) {
      case 'TOGGLE_TAB':
        return !state
      default:
        return state
    }
  }

  export default toggleTab
