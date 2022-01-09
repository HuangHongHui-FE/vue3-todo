<template>
  <div class="wrapper">
    <todo-input/>
    <todo-list/>
  </div>
</template>

<script lang="ts">

import { defineComponent } from '@vue/runtime-core'
import TodoInput from './components/TodoInput/index.vue'
import TodoList from './components/TodoList/index.vue'

// 加上defineComponent，ts的类型提示方法就会比较完整
export default defineComponent({
  name: 'App',
  components: {
    TodoList,
    TodoInput
  }
})
</script>


