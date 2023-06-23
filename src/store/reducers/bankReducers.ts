import { ActionType } from "../action-types";
import { Action } from "../actions";

const initialState = 1000;

const reducer = (state: number = initialState, action: Action) => {
    switch (action.type) {
        case ActionType.DEPOSITE:
            return state + action.payload;
        case ActionType.WITHDRAW:
            return state - action.payload;
        case ActionType.BANKRUPT:
            return 0
        default:
            return state
  }
}

export default reducer
