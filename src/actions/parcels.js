import React from "react";
import axios from "axios";
import { toast } from 'react-toastify';

export const header = {
  headers: {
    accept: "application/json",
    "content-type": "application/json",
    Authorization: `Bearer ${sessionStorage.user_token}`
  }
};

export const postParcel = data => {
  const url = "https://sender-app.herokuapp.com/api/v1/parcels";

  return dispatch => {
    dispatch({
      type: "LOADING_PARCEL",
      payload: true
    });
    return axios
      .post(url, data, header)
      .then(function(response) {
        toast.success(<p>Successfully created a parcel</p>);
        dispatch({
          type: "ADD_PARCEL",
          payload: response.data["message"]
        });
        dispatch({
          type: "LOADING_PARCEL",
          payload: false
        });
      })
      .catch(function(error) {
        if (error.response) {
          toast.error(<p>{error.response.data.message}</p>
          );
          dispatch({
            type: "LOADING_PARCEL",
            payload: false
          });
        }
      });
  };
};
