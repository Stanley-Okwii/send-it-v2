export const addParcel = (state = [], action) => {
    switch (action.type) {
      case 'ADD_PARCEL':
        return action.payload
      default:
        return state;
    }
}
  