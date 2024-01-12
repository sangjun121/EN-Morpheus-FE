function reducer(state, action) {
  switch (action.type) {
    //로딩 중 상태 업데이트
    case "LOADING":
      return {
        loading: true,
        data: null,
        error: null,
      };
    case "SUCCESS":
      return {
        loading: false,
        data: action.data,
        error: null,
      };
    case "ERROR":
      return {
        loading: false,
        data: null,
        error: action.error,
      };
    default:
      throw new Error("Unhandled action type: ${action.type}");
  }
}

export default reducer;
