import { STORE } from "../types/storeType";

const INITIAL_STATE = {
  storeData: ""
};

const storeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case STORE.UPDATE_STORE_INFO:
      return {
        ...state,
        storeData: action.data
      };

    default:
      return state;
  }
};

export default storeReducer;
