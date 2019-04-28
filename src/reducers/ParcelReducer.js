export const addParcel = (state = [], action) => {
    switch (action.type) {
      case 'ADD_PARCEL':
        return action.payload
      default:
        return state;
    }
}

export const fetchParcels = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_PARCELS':
      return action.payload
    default:
      return state;
  }
}
