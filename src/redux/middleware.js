import { CREATE_POST } from "./types";
import { showAlert } from "./actions";

const forbidenWords = ["fuck", "spam", "shit"];

export const forbidenWordsMiddleware = ({ dispatch }) => (next) => (action) => {
  if (action.type === CREATE_POST) {
    const forbiden = forbidenWords.filter((word) =>
      action.payload.title.includes(word)
    );

    if (forbiden.length) {
      return dispatch(showAlert("Don`t use forbiden words!"));
    }
  }

  return next(action);
};
