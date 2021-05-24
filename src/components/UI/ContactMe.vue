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
        getData(name, lastName, email, message) {
            if(this.thanks) this.thanks = false;
            if(this.error) this.error = false;

            this.clientName = name;
            this.clientLastName = lastName;
            this.clientEmail = email;
            this.clientMessage = message;

            axios.post('https://vue-portfolio-messages-default-rtdb.europe-west1.firebasedatabase.app/messages.json', {
                name: this.clientName,
                last_name: this.clientLastName,
                email: this.clientEmail,
                message: this.clientMessage,
            }).then( () => {
                this.thanks = true;
            }).catch( () => {
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
</style>