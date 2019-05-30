const postReducer = (state = [], action) => {
    switch(action.type) {
      case "'ADD_MARKERS": 
      return state.concat([action.data])
      default: 
      return state;
    }
   }
   export default postReducer;
   