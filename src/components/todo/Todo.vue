<template>
   <v-container class="mx-auto px-4">
      <v-row>
      <v-col class="col-md-8 offset-md-2">
         <todo-create @addTodo='todos.unshift($event)'></todo-create>
      </v-col></v-row>
      
      <v-row>
         <v-col class="col-md-8 offset-md-2">
            <v-divider></v-divider> </v-col
      ></v-row>
   </v-container>
</template>

<script>
import TodoCreate from '@/components/todo/TodoCreate.vue'

export default {
   components: { TodoCreate },
};
</script>