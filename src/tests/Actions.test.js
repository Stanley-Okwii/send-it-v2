import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import moxios from "moxios";

import { login, Register } from "../actions/registration/login";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("Actions", () => {
  beforeEach(function() {
    moxios.install();
  });

  afterEach(function() {
    moxios.uninstall();
  });
  const signUpReponse = {
    message: "You have successfully sign up"
  };

  it("can sign up a user", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 201,
        response: signUpReponse
      });
    });
    const userData = {
      email: "mail@gmail.com",
      password: "nam127@e",
      username: "asdsds"
    };
    const store = mockStore({ payload: [] });
    const expectAction = [{"payload": true, "type": "LOADING"}, {"payload": "You have successfully sign up", "type": "SIGN_UP"}, {"payload": false, "type": "LOADING"}]
    return store.dispatch(Register(userData)).then(() => {
      expect(store.getActions()).toEqual(expectAction);
    });
  });

  it("can not sign up a user with an error", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 404,
        response: []
      });
    });
    const userData = {
      email: "mail@gmail.com",
      password: "nam127@e",
      username: "asdsds"
    };
    const expectedAction = [{ "payload": true, "type": "LOADING" }, { "payload": false, "type": "LOADING" }];
    const store = mockStore({ payload: [] });
    return store.dispatch(Register(userData)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  it("can log in  a user", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: signUpReponse
      });
    });
    const userData = {
      email: "mail@gmail.com",
      password: "nam127@e",
    };
    const store = mockStore({ payload: [] });
    const expectAction =
      [
        {
          "payload": true,
          "type": "LOADING",
        },
        {
          "payload": "You have successfully sign up",
          "type": "LOGIN",
        },
        {
          "payload": false,
          "type": "LOADING",
        },
      ];
    return store.dispatch(login(userData)).then(() => {
      expect(store.getActions()).toEqual(expectAction);
    });
  });

  it("can not sign up a user with an error", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 404,
        response: []
      });
    });
    const userData = {
      email: "mail@gmail.com",
      password: "nam127@e",
    };
    const expectedAction = [{"payload": true, "type": "LOADING"}, {"payload": false, "type": "LOADING"}]
    const store = mockStore({ payload: [] });
    return store.dispatch(login(userData)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
});
