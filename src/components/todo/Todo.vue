<template>
   <v-container class="mx-auto px-4">
      <v-row>
         <v-col class="col-md-8 offset-md-2">
            <v-tabs>
               <v-tab @click="componentName = 'TodoCreate'">Create</v-tab>
               <v-tab @click="componentName = 'TodoSearch'">Search</v-tab>
            </v-tabs>
            <v-divider></v-divider>
         </v-col></v-row
      >

      <v-row>
         <v-col class="col-md-8 offset-md-2">
            <transition name="slide" type="transition" mode="out-in">
               <component :is="componentName"></component>
            </transition> </v-col
      ></v-row>
      <v-row>
         <v-col class="col-md-8 offset-md-2"> <v-divider></v-divider> </v-col
      ></v-row>
      <v-row>
         <v-col class="col-md-8 offset-md-2">
            <todo-item v-for="todo in todos" :key="todo.id" :todo="todo"></todo-item>
         </v-col>
      </v-row>
   </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
import TodoItem from '@/components/todo/TodoItem.vue';
import TodoCreate from '@/components/todo/TodoCreate.vue';
import TodoSearch from '@/components/todo/TodoSearch.vue';

export default {
   data() {
      return {
         componentName: 'TodoCreate',
      };
   },
   components: { TodoCreate, TodoSearch, TodoItem },
   computed: { ...mapGetters(['todos']) },
};
</script>
