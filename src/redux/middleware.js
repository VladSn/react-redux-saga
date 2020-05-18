import { CREATE_POST } from "./types";
import { showAlert } from "./actions";

const forbidden = ["fuck", "php"];

export function forbiddenWordsMiddleware(state) {
  return function (next) {
    return function (action) {
      if (action.type === CREATE_POST) {
        const found = forbidden.filter((w) => action.payload.title.includes(w));
        if (found.length) {
          return state.dispatch(
            showAlert("На этом сайте не будет таких постов!!")
          );
        }
      }
      return next(action);
    };
  };
}
