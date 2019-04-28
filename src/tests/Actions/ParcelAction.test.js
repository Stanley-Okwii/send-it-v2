import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import moxios from "moxios";

import { postParcel } from "../../actions/parcels";
import { fetchParcels } from "../../actions/fetchParcels";
import { getAllParcels } from "../mock-data";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("Parcel actions ", () => {
  beforeEach(function() {
    moxios.install();
  });

  afterEach(function() {
    moxios.uninstall();
  });
  const postData = {
    message: "You created a parcel"
  };

  it("can post a parcel", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 201,
        response: postData
      });
    });
    const userData = {
      email: "mail@gmail.com",
      password: "nam127@e",
      username: "asdsds"
    };
    const store = mockStore({ payload: [] });
    const expectAction = [
      { type: "LOADING_PARCEL", payload: true },
      { type: "ADD_PARCEL", payload: "You created a parcel" },
      { type: "LOADING_PARCEL", payload: false }
    ];
    return store.dispatch(postParcel(userData)).then(() => {
      expect(store.getActions()).toEqual(expectAction);
    });
  });

  it("can not post a parcel with an error", () => {
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
    const expectedAction = [
      { type: "LOADING_PARCEL", payload: true },
      { type: "LOADING_PARCEL", payload: false }
    ];
    const store = mockStore({ payload: [] });
    return store.dispatch(postParcel(userData)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  it("get all parcels", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: { data: getAllParcels }
      });
    });
    const store = mockStore({ payload: [] });
    const expectAction = [{ type: "FETCH_PARCELS", payload: getAllParcels }];
    return store.dispatch(fetchParcels()).then(() => {
      expect(store.getActions()).toEqual(expectAction);
    });
  });

  it("get all parcels with error", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 404,
        response: {}
      });
    });
    const store = mockStore({ payload: [] });
      return store.dispatch(fetchParcels()).then(() => {
      expect(store.getActions()).toEqual([]);
    });
  });
});
