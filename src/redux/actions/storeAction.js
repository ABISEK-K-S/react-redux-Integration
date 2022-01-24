import { STORE } from "./../types/storeType";
import axios from "axios";

export const updateStoreData = (data) => {
  return {
    type: STORE.UPDATE_STORE_INFO,
    data: data
  };
};

export const getInitialData = (data) => async (dispatch) => {
  var requestData = {
    method: "GET",
    url: "url",
    params: {},
    headers: {}
  };
  axios
    .request(requestData)
    .then(function (response) {
      dispatch(updateStoreData(response));
    })
    .catch(function (error) {
      console.error(error);
    });
};
