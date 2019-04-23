import { signUp, login , loading} from "../reducers/Registration";
import { addParcel } from '../../src/reducers/ParcelReducer';

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
});
