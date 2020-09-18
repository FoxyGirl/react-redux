import {
  CREATE_POST,
  FETCH_POST,
  SHOW_LOADER,
  HIDE_LOADER,
  SHOW_ALERT,
  HIDE_ALERT,
} from "./types";

export const createPost = (post) => ({
  type: CREATE_POST,
  payload: post,
});

export const fetchPosts = () => async (dispatch) => {
  try {
    dispatch(showLoader());
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=5"
    );
    const json = await response.json();

    setTimeout(() => {
      dispatch({
        type: FETCH_POST,
        payload: json,
      });
      dispatch(hideLoader());
    }, 1000);
  } catch (e) {
    // dispatch(showAlert(e.message));
    // dispatch(hideLoader());

    setTimeout(() => {
      dispatch(showAlert(e.message));
      dispatch(hideLoader());
    }, 1000);
  }
};

export const showLoader = () => ({
  type: SHOW_LOADER,
});

export const hideLoader = () => ({
  type: HIDE_LOADER,
});

export const showAlert = (text) => (dispatch) => {
  dispatch({
    type: SHOW_ALERT,
    payload: text,
  });
  setTimeout(() => {
    dispatch(hideAlert());
  }, 1500);
};

export const hideAlert = () => ({
  type: HIDE_ALERT,
});
