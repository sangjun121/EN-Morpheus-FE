function imageReducer(state, action) {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        images: state.images.map((img, index) =>
          index === action.index ? { ...img, loading: true, error: null } : img
        ),
      };
    case "SUCCESS":
      return {
        ...state,
        images: state.images.map((img, index) =>
          index === action.index
            ? { ...img, loading: false, url: action.imageUrl }
            : img
        ),
      };
    case "ERROR":
      return {
        ...state,
        images: state.images.map((img, index) =>
          index === action.index
            ? { ...img, loading: false, error: action.error }
            : img
        ),
      };
    default:
      return state;
  }
}

export default imageReducer;
