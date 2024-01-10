// Estraggo la funzione createApp dall'oggetto Vue
const { createApp } = Vue;

// Creo l'istanza di Vue da mondare in pagina
createApp({
    data() {
        return {
            emails: [],
        };
    },
    mounted(){
        for (let i = 0; i < 10; i++) {
            axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((res) =>{
                let email = ''
                email = res.data.response;
                this.emails.push(email);
                console.log(this.emails);
            });
        }          
        }          
  // Monto l'istanza di Vue in pagina
}).mount('#app');