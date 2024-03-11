const {createApp} = Vue;

createApp({
  data() {
    return {
      message:'Un passo alla Vuelta!',
      tempMessage:'',
      image:"assets/sfondo.jpg"
    }
  },
  methods: {
    changer(string){
      this.message = string;
    },
    applyBackImg(){

    }
 
  },
  mounted() {
    console.log('ciao');
  },
}).mount('#app')