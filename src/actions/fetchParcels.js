import axios from "axios";

export const header = {
  headers: {
    accept: "application/json",
    "content-type": "application/json",
    Authorization: `Bearer ${sessionStorage.getItem("user_token")}`
  }
};

export const fetchParcels = () => {
  const url = "https://sender-app.herokuapp.com/api/v1/parcels";

  return dispatch => {
    return axios
      .get(url, header)
      .then(function(response) {
        dispatch({
          type: "FETCH_PARCELS",
          payload: response.data.data
        });
      })
      .catch(function(error) {
        return;
      });
  };
};
