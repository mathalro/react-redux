import * as types from "./actionTypes";
import * as authorApi from "../../api/authorApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadAuthorsSuccess(authors) {
  return { type: types.LOAD_AUTHORS_SUCCESS, authors };
}

export function createAuthorSuccess(author) {
  return { type: types.CREATE_AUTHOR_SUCCESS, author };
}

export function loadAuthors() {
  return function (dispatch) {
    dispatch(beginApiCall());
    return authorApi
      .getAuthors()
      .then((authors) => {
        dispatch(loadAuthorsSuccess(authors));
      })
      .catch((error) => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function saveAuthor(author) {
  return function (dispatch, getState) {
    dispatch(beginApiCall());
    return authorApi
      .saveAuthor(author)
      .then((savedAuthor) => {
        dispatch(createAuthorSuccess(savedAuthor));
      })
      .catch((error) => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}
