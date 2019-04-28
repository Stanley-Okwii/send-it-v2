import { signUp, login , loading, loadingParcel, isLoginTab} from "../reducers/Registration";
import { addParcel, fetchParcels } from '../../src/reducers/ParcelReducer';

describe("registration ", () => {
  it("should loading reducers", () => {
    expect(
      loading([], {
        type: "LOADING",
        payload: []
      })
    ).toEqual([]);
  });

  it("should sign up reducers", () => {
    expect(
      signUp([], {
        type: "SIGN_UP",
        payload: []
      })
    ).toEqual([]);
  });

  it("should login reducers", () => {
    expect(
      login([], {
        type: "LOGIN",
        payload: []
      })
    ).toEqual([]);
  });

  it("should add parcel reducers", () => {
    expect(
      addParcel([], {
        type: "ADD_PARCEL",
        payload: []
      })
    ).toEqual([]);
  });

  it("should show all parcels", () => {
    expect(
      fetchParcels([], {
        type: "FETCH_PARCELS",
        payload: []
      })
    ).toEqual([]);
  });

  it("should show loading", () => {
    expect(
      loadingParcel([], {
        type: "LOADING_PARCEL",
        payload: []
      })
    ).toEqual([]);
  });

  it("should show loading parcel", () => {
    expect(
      isLoginTab([], {
        type: "LOGIN_TAB",
        payload: []
      })
    ).toEqual([]);
  });


});
