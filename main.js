const { createApp } = Vue;

createApp({
    data() {
        return {
            list: [
                {
                    text: 'sono una nuova task',
                    done: false,
                },
                {
                    text: 'sono una nuova task',
                    done: false,
                },
            ],
            newTodo: "",
        };
    },
    methods: {
        deleteItem(index){ 
            this.list.splice(index, 1);
        },
        addTask(){
            this.list.push({
                text: this.newTodo,
                done: false,
            });
            this.newTodo = '';
        },
        isItDone(index) {
            this.list[index].done = !this.list[index].done;
        },
    },
    mounted() {
        
    },
  }).mount('#app');