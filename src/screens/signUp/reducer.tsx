import { INCREMENT, DECREMENT, RESET } from "../../utils/constant";

const counterReducer = (state = 0, action:any) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    case RESET:
      return 0;
    default:
      return state;
  }
};

export default counterReducer;
