const { createApp } = Vue;

createApp({
    data() {
        return {
            list: [
                {
                    text: 'sono una nuova task',
                    done: true,
                },
                {
                    text: 'sono una nuova task',
                    done: false,
                },
            ],
        };
    },
    methods: {
        
    },
    mounted() {
        
    },
  }).mount('#app');