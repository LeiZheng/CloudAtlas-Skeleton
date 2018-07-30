import { alertConstants } from '../constants';
//the basic alert actions without binding to UI components.
export const alertActions = {
    success: (msg) => ({ type: alertConstants.SUCCESS, msg }),
    error: (msg) => ({ type: alertConstants.ERROR, msg }),
    clear: () => ({ type: alertConstants.CLEAR })
};

export const reducer = (state = {}, action) => {
  switch (action.type) {
    case alertConstants.SUCCESS:
      return {
        type: 'alert-success',
        message: action.message
      };
    case alertConstants.ERROR:
      return {
        type: 'alert-danger',
        message: action.message
      };
    case alertConstants.CLEAR:
      return {};
    default:
      return state
  }
}