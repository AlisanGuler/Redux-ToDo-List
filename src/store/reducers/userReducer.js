const initialState = {
    users: [],
    x: "",
    y: "",
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ekle":
        return state;
  
      case "cikar":
        return state;
  
      default:
        return state;
    }
  };
  
  export default userReducer;
  
  