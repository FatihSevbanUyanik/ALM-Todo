<template>
   <v-container class="mx-auto px-4">
      <v-row>
      <v-col class="col-md-8 offset-md-2">
         <todo-create ></todo-create>   
      </v-col></v-row>
      <v-row>
         <v-col class="col-md-8 offset-md-2">
            <v-divider></v-divider> </v-col
      ></v-row>
      <v-row>
         <v-col class="col-md-8 offset-md-2">
            <todo-item v-for="todo in todos" :key="todo.id" :todo="todo"></todo-item>
         </v-col>
      </v-row>
   </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import TodoItem from '@/components/todo/TodoItem.vue'
import TodoCreate from '@/components/todo/TodoCreate.vue'

export default {
   components: { TodoCreate, TodoItem },
   computed: { ...mapGetters(['todos']) }
};
</script>