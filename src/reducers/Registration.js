export const signUp = (state = [], action) => {
    switch (action.type) {
      case 'SIGN_UP':
        return action.payload
      default:
        return state;
    }
  }

  export const login = (state = [], action) => {
    switch (action.type) {
      case 'LOGIN':
        return action.payload
      default:
        return state;
    }
  }

  export const loading = (state = false, action) => {
    switch (action.type) {
      case 'LOADING':
        return action.payload
      default:
        return state;
    }
  }

export const loadingParcel = (state = false, action) => {
    switch (action.type) {
      case 'LOADING_PARCEL':
        return action.payload
      default:
        return state;
    }
}

export const isLoginTab = (state = true, action) => {
  switch (action.type) {
    case 'LOGIN_TAB':
      return action.payload;
    default:
      return state;
  }
}
