import React from "react";
import axios from "axios";
import { toast } from "react-semantic-toasts";

export const header = {
  headers: {
    accept: "application/json",
    "content-type": "application/json",
    Authorization: `Bearer ${sessionStorage.getItem("user_token")}`
  }
};

export const postParcel = data => {
  const url = "https://sender-app.herokuapp.com/api/v1/parcels";

  return dispatch => {
    dispatch({
      type: "LOADING",
      payload: true
    });
    return axios
      .post(url, data, header)
      .then(function(response) {
        dispatch({
          type: "ADD_PARCEL",
          payload: response.data["message"]
        });
        toast({
          title: "Add Parcel",
          type: "success",
          description: <p>Successfully created a parcel</p>
        });
        dispatch({
          type: "LOADING",
          payload: false
        });
      })
      .catch(function(error) {
        if (error.response) {
          toast({
            title: "Failed to add parcel",
            type: "error",
            description: <p>{error.response.data.message}</p>
          });
          dispatch({
            type: "LOADING",
            payload: false
          });
        }
      });
  };
};
