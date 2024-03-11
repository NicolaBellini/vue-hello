const {createApp} = Vue;

createApp({
  data() {
    return {
      message:'Hello World!',
    }
  },
  methods: {
    
  },
  mounted() {
    console.log('ciao');
  },
}).mount('#app')