var app = new Vue({
  el: '#app',
  data: {

  todos: [
  'my first day at work',
  'my second day at work'

  ],

  item: 'To do item'

  },
  methods:{
  	addTodo(){
  		this.todos.push(this.item)
  		this.item ='';
  	}
  }
})