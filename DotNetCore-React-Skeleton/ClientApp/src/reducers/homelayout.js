const toggleLeftNavType = "toggleLeftNav";
const initialState = { showleftnav: false };

export const actionCreators = {
    toggleLeftNav: () => ({ type: toggleLeftNavType }),
  
};

export const reducer = (state, action) => {
  state = state || initialState;

    if (action.type === toggleLeftNavType) {
        return { showleftnav: !state.showleftnav };
  }

  return state;
};

