const state = {
   todos: localStorage.getItem('todos') || '[]',
   todoSearch: ''
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
   updateSearch(state, payload) {
      state.todoSearch = payload
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
      return state.todos.filter(todo => todo.content.includes(state.todoSearch))   
   },
   todoSearch(state) { 
      return state.todoSearch 
   },
}

export default {
   state,
   mutations,
   actions,
   getters,
};
