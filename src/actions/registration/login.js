import React from "react";
import axios from "axios";
import { toast } from "react-semantic-toasts";

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
        dispatch({
          type: "SIGN_UP",
          payload: response.data["message"]
        });
        toast({
          title: "Sign up",
          type: "success",
          description: <p>Successfully created an account</p>
        });
        dispatch({
          type: "LOADING",
          payload: false
        });
      })
      .catch(function(error) {
        if (error.response) {
          toast({
            title: "Failed to sign up",
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

export const login = data => {
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
        toast({
          title: "Login success",
          type: "success",
          description: <p>Successfully logged in</p>
        });
        const token = response.data["user_token"];
        sessionStorage.setItem("user_token", token);
        dispatch({
          type: "LOADING",
          payload: false
        });
        window.location.href = "/home";
      })
      .catch(function(error) {
        if (error.response) {
          toast({
            title: "Failed to log in",
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
