import { ActionType } from "../action-types"

interface DepositeAction {
    type: ActionType.DEPOSITE,
    payload : number
}
interface WithdrawAction {
    type: ActionType.WITHDRAW,
    payload : number
}

interface BankruotAction {
    type : ActionType.BANKRUPT
}

export type Action = DepositeAction | WithdrawAction | BankruotAction
