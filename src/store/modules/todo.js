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
   updateTodo(state, payload) {
      state.todos.map(todo => {
         if (todo.id === payload) 
            todo.isDone = !todo.isDone 
         return todo
      })
      localStorage.setItem('todos', JSON.stringify(state.todos));
   },
   delete(state, payload) {
      state.todos.filter(todo =>  todo.id !== payload)
      localStorage.setItem('todos',  JSON.stringify(state.todos));
   },
   initialiseTodos(state) {
      state.todos = JSON.parse(state.todos)
   }
}

const actions = {};

const getters = {
   getTodos(state) {
       return state.todos;
   }
}

export default {
   state,
   mutations,
   actions,
   getters,
};
