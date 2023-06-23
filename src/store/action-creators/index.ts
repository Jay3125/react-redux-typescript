import { ActionType } from "../action-types"
import { Dispatch } from "redux"
import { Action } from "../actions/index"


export  const depositeMoney = (amount : number) => {
    return (dispatch : Dispatch<Action>) => {
        dispatch({
            type: ActionType.DEPOSITE,
            payload : amount
        })
    }
}

export const withdraeMoney = (amount : number) => {
    return (dispatch : Dispatch<Action>) => {
        dispatch({
            type: ActionType.WITHDRAW,
            payload : amount
        })
    }
}

export const bankruptMoney = () => {
    return (dispatch : Dispatch<Action>) => {
        dispatch({
            type: ActionType.BANKRUPT,
          
        })
    }
}