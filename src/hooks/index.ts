import { SET_TODO } from "@/store/actionTypes";
import { ITodo, TODO_STATUS } from "@/typings"
import { Store, useStore } from "vuex"

// 自定义的hooks
export interface IUseTodo {
    setTodo: (value: string) => void;
    setTodoList: () => void;
    removeTodo: () => void;
    setStatus: () => void;
    setDoing: () => void;
}

// IUseTodo是返回值
function useTodo(): IUseTodo {
    const store: Store<any> = useStore();

    function setTodo(value: string): void {
        const todo: ITodo = {
            id: new Date().getTime(),
            content: value,
            status: TODO_STATUS.WILLDO
        }

        store.dispatch(SET_TODO, todo);
    }

    function setTodoList() {
        
    }

    function removeTodo() {
        
    }

    function setStatus() {
        
    }

    function setDoing() {
        
    }

    return {
        setTodo,
        setTodoList,
        removeTodo,
        setStatus,
        setDoing
    }
}

export {
    useTodo
}