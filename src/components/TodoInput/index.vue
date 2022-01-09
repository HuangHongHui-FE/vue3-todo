<template>
    <div>Todo-input</div>
    <div>
        <input type="text" v-model="todoValue" @keyup="setTodoValue">
    </div>
</template>

<script lang="ts">
// reactive, ref实现响应式
import { defineComponent, reactive, ref } from "@vue/runtime-core"

import { IUseTodo, useTodo } from '../../hooks/index'
export default defineComponent({
    name: 'TodoInput',
    setup () {
        const todoValue = ref<string>('');
        const { setTodo }: IUseTodo = useTodo();
        const setTodoValue = (e: KeyboardEvent): void => {
            if (e.keyCode === 13 && todoValue.value.trim().length){
                // 设置数据
                // alert(todoValue.value);
                setTodo(todoValue.value)

                todoValue.value = '';
            }
        }
        return {
            todoValue,
            setTodoValue
        }
    }
});
</script>

<style>

</style>