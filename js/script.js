const {createApp} = Vue;

createApp({
  data() {
    return {
      message:'Un passo alla Vuelta',
      tempMessage:'',
      counter:0,
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