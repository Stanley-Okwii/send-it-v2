import React from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const header = {
  headers: {
    accept: "application/json",
    "content-type": "application/json"
  }
};

export const Register = data => {
  const url = "https://sender-app.herokuapp.com/api/v1/user";

  return dispatch => {
    dispatch({
      type: "LOADING",
      payload: true
    });
    return axios
      .post(url, data, header)
      .then(function(response) {
        toast.success(<p>Successfully created an account</p>);
        dispatch({
          type: "SIGN_UP",
          payload: response.data["message"]
        });
        dispatch({
          type: "LOADING",
          payload: false
        });
        dispatch({
          type: "LOGIN_TAB",
          payload: true
        });
      })
      .catch(function(error) {
        if (error.response) {
          toast.error(<p>{error.response.data.message}</p>);
          dispatch({
            type: "LOADING",
            payload: false
          });
        }
      });
  };
};

export const login = (data, ownProps) => {
  const url = "https://sender-app.herokuapp.com/api/v1/auth/signin";

  return dispatch => {
    dispatch({
      type: "LOADING",
      payload: true
    });
    return axios
      .post(url, data, header)
      .then(function(response) {
        dispatch({
          type: "LOGIN",
          payload: response.data["message"]
        });
        toast.success(<p>Successfully logged in</p>);
        const token = response.data["user_token"];
        sessionStorage.setItem("user_token", token);
        dispatch({
          type: "LOADING",
          payload: false
        });
        ownProps.history.push("/home");
      })
      .catch(function(error) {
        if (error.response) {
          toast.error(<p>{error.response.data.message}</p>);
          dispatch({
            type: "LOADING",
            payload: false
          });
        }
      });
  };
};

export const toggleTab = data => {
  return dispatch => {
    dispatch({
      type: "LOGIN_TAB",
      payload: data
    });
  };
};
