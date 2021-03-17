const state = {
   todos: localStorage.getItem('todos') || '[]'
};

const mutations = {
   createTodo(state, payload) {
      payload.isDone = false
      payload.createdAt = new Date()
      payload.id = Math.random() * 100000
      state.todos.unshift(payload)
      localStorage.setItem('todos',  JSON.stringify(state.todos));
   }, 
   updateTodos(state) {
      localStorage.setItem('todos', JSON.stringify(state.todos));
   },
   deleteTodo(state, payload) {
      state.todos = state.todos.filter(todo =>  todo.id !== payload)
      localStorage.setItem('todos',  JSON.stringify(state.todos));
   },
   initialiseTodos(state) {
      state.todos = JSON.parse(state.todos)
   }
}

const actions = {};

const getters = {
   todos(state) { 
      
         console.log("passes")
      return state.todos; }
}

export default {
   state,
   mutations,
   actions,
   getters,
};
