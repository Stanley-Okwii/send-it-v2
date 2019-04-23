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

