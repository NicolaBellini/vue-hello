const {createApp} = Vue;

createApp({
  data() {
    return {
      message:'Un passo alla Vuelta',
      tempMessage:'',
    }
  },
  methods: {
    changer(string){
      this.message = string;
    },
  },
  mounted() {
    console.log('ciao');

  },
}).mount('#app')