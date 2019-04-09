const isLogInTab = (state = true, action) => {
    switch (action.type) {
      case 'TOGGLE_LOGIN':
        return true
      case 'TOGGLE_SIGNUP':
        return false;
      default:
        return state;
    }
  }

  export default isLogInTab
