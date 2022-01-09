import { IState, ITodo } from "@/typings"
import { Commit } from "vuex"
import { SET_TODO } from "./actionTypes"

interface ICtx {
    commit: Commit,
    state: IState
}

export default {
    // void是代表返回值的
    [SET_TODO]({ commit }: ICtx, todo: ITodo): void{
        commit(SET_TODO, todo)
    }
}