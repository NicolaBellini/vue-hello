const {createApp} = Vue;

createApp({
  data() {
    return {
      message:'Un passo alla Vuelta !',
      tempMessage:'',
      image:"assets/sfondo.jpg",
      blurredClass: 'blurred',
      isFocus: false,

      caruselWords: [
        "Algoritmo",
        "Array",
        "Booleano",
        "Ciclo",
        "Classe",
        "Compilatore",
        "Debugger",
        "Dato",
        "Database",
        "Definizione",
        "Direttiva",
        "Editor",
        "Errore",
        "Framework",
        "Funzione",
        "Gestione",
        "Implementazione",
        "Interfaccia",
        "Kernel",
        "Libreria",
        "Logica",
        "Loop",
        "Metodo",
        "Modulo",
        "Oggetto",
        "Operatore",
        "Ottimizzazione",
        "Parametro",
        "Programma",
        "Progetto",
        "Protocollo",
        "Pseudocodice",
        "Ricorsione",
        "Riga",
        "Sintassi",
        "Software",
        "Sistema",
        "Struttura",
        "Test",
        "Variabile",
        "Accesso",
        "Assemblatore",
        "Debugging",
        "Dichiarazione",
        "Esecuzione",
        "Framework",
        "Implementazione",
        "Interfaccia",
        "Libreria",
        "Logica",
        "Metodo",
        "Modulo",
        "Oggetto",
        "Operatore",
        "Ottimizzazione",
        "Parametro",
        "Programma",
        "Progetto",
        "Protocollo",
        "Pseudocodice"],
      offset: 0,
      interval: null,
      intervalDuration: 10

    }
  },
  methods: {
    changer(string){
      this.message = string;
    },
    startCarousel() {
      // Calcoliamo la larghezza totale del carosello
      const carouselWidth = this.caruselWords.length * 100; // Ogni parola ha una larghezza di 100px
  
      // Avviamo l'intervallo per muovere il carosello
      this.interval = setInterval(() => {
        // Scorri gradualmente le parole da destra a sinistra
        this.offset -= 1; // Puoi regolare la velocità dello scorrimento modificando questo valore
  
        // Se il carosello si sposta oltre la larghezza del carosello, aggiustiamo l'offset per far riapparire le parole a destra
        if (Math.abs(this.offset) >= carouselWidth) {
          this.offset += carouselWidth; // Sposta le parole a destra
        }
      }, 10); // Puoi regolare la velocità di aggiornamento dell'animazione modificando questo valore
    }
  
  },
  mounted() {
    console.log('ciao');
    this.input = document.querySelector('.my-input');
    console.log(this.input);
    this.startCarousel();
  }
}).mount('#app');