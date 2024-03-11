const {createApp} = Vue;

createApp({
  data() {
    return {
      message:'Un passo alla Vuelta!',
      tempMessage:'',
      img:'url(https://unsplash.com/it/foto/un-primo-piano-di-un-uccello-con-la-testa-rossa-BUhVFtY-890)'
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