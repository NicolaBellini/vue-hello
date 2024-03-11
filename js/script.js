const {createApp} = Vue;

createApp({
  data() {
    return {
      message:'Un passo alla Vuelta !',
      tempMessage:'',
      image:"assets/sfondo.jpg",
      blurredClass: 'blurred',
      isFocus: false
    }
  },
  methods: {
    changer(string){
      this.message = string;
    },
    
  },
  mounted() {
    console.log('ciao');
    this.input = document.querySelector('.my-input');
    console.log(this.input);
  }
}).mount('#app');