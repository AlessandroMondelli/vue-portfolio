<template>
    <div class="section-wrap">
        <h2 class="section-title">Contattami</h2>
        <div class="content-container clearfix">
            <div class="form-par">
                <p>Se vuoi, puoi lasciarmi un messaggio, un'idea, un consiglio.</p>
                <p>Qualsiasi cosa!</p>
                <contact-form @sendForm="getData"></contact-form>
            </div>
            <div v-if="thanks" class="form-thanks">
                <p>Grazie, il tuo messaggio è stato inviato.</p>
            </div>
            <div v-if="error" class="form-error">
                <p>Si è verificato un errore, riprova.</p>
            </div>
        </div>
        <div class="icon-link">
            <a href="https://www.iubenda.com/privacy-policy/90494957" target="_blank" class="iubenda-privacy">Privacy Policy</a>
        </div>
    </div> 
</template>

<script>
import ContactForm from './Contact/ContactForm.vue'
import axios from 'axios'

export default {
    components: {
        ContactForm
    },
    data() {
        return {
            clientName: "",
            clientLastName: "",
            clientEmail: "",
            clientMessage: "",
            thanks: false,
            error: false,
        }
    },
    methods: {
        getData(name, lastName, email, message) { //Prendo dati dal child
            //Controllo se alcuni stati di successo/errore sono true
            if(this.thanks) this.thanks = false; 
            if(this.error) this.error = false;

            //Salvo dati su variabili locali
            this.clientName = name;
            this.clientLastName = lastName;
            this.clientEmail = email;
            this.clientMessage = message;

            //Invio dati con chiamata POST al database Firebase
            axios.post('https://vue-portfolio-messages-default-rtdb.europe-west1.firebasedatabase.app/messages.json', {
                name: this.clientName,
                last_name: this.clientLastName,
                email: this.clientEmail,
                message: this.clientMessage,
            }).then( () => { //Se i dati sono stati inviati, messaggio di ringraziamento
                this.thanks = true;
            }).catch( () => { //Se i dati non sono stati inviati, messaggio di errore
                this.error = true;
            });   
        }
    }   
}
</script>

<style lang="scss" scoped>
    .form-thanks, .form-error {
        margin-top: $margin-mid;
    }

    .icon-link {

        a {
            font-size: $error-form-font-font-size;
            transition: $transition-time;

            &:hover {
                color: $nav-icons-hover-color;
            }
        }
    }
</style>