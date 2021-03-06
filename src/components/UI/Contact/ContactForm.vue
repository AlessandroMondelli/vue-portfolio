<template>
    <div id="contact-form">
        <form @submit.prevent="submitForm">
            <div class="form-control name">
                <label>Nome</label>
                <input type="text" name="nome" id="nome" v-model.trim="name" @blur="validateName" :class="{ invalid: nameValidity == 'invalid' }" required />
                <p v-if="nameValidity == 'invalid'" class="error">Inserisci un nome valido</p>
            </div>
            <div class="form-control last-name">
                <label>Cognome</label>
                <input type="text" name="cognome" id="cognome" v-model.trim="lastName" @blur="validateLastName" :class="{ invalid: lastNameValidity == 'invalid' }" required />
                <p v-if="lastNameValidity == 'invalid'" class="error">Inserisci un cognome valido</p>
            </div>
            <div class="form-control email">
                <label>Email</label>
                <input type="email" name="email" id="email" v-model.trim="email" @blur="validateEmail" :class="{ invalid: emailValidity == 'invalid' }" required />
                <p v-if="emailValidity == 'invalid'" class="error">Inserisci una email valida</p>
            </div>
            <div class="form-control message">
                <label>Messaggio</label>
                <textarea type="text" rows="10" cols="25" name="messaggio" id="messaggio" v-model="message" @blur="validateMessage" :class="{ invalid: messageValidity == 'invalid' }" required />
                <p v-if="messageValidity == 'invalid'" class="error">Inserisci un messaggio valido</p>
            </div>
            <div class="form-control submit">
                <button id="submit">Invia</button>
                <p class="recaptcha-policy">Questo sito è protetto da reCAPTCHA e dalle  
                    <a href="https://policies.google.com/privacy" target="_blank">Privacy Policy</a> e
                    <a href="https://policies.google.com/terms" target="_blank">Termini di servizio</a> applicati da Google.
                </p>
                <p v-if="errorState">Qualcosa è andato storto, riprova</p>
            </div>
        </form>

    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            name: "",
            nameValidity: "",
            lastName: "",
            lastNameValidity: "",
            email: "",
            emailValidity: "",
            message: "",
            messageValidity: "",
            errorState: false,
        }
    },
    methods: {
        submitForm() { //All'invio del form
            if(this.nameValidity == 'valid' && this.lastNameValidity == 'valid' && this.emailValidity == 'valid' && this.messageValidity == 'valid') { //Verifico se i dati inseriti sono validi
                this.$recaptcha('contattami').then((token) => { //Richiamo funzione per recaptcha e prendo il token generato
                    axios.post('https://www.google.com/recaptcha/api/siteverify', null, { params: {
                        secret: '***',response: token
                    }}).then( (response) => { //Se la chiamata post è andata a buon fine
                        if(response.data.success == true) {
                            this.$emit('send-form', this.name, this.lastName, this.email, this.message); //Invio al parent

                            //Azzero campi di input
                            this.name = ""; 
                            this.lastName = "";
                            this.email = "";
                            this.message = "";
                        }
                    }).catch( () => { //Se si è verificato un errore
                        this.errorState = true;
                    });   
                })

                setTimeout(() => {
                    this.$router.push({ name: 'Home' }); //Invio utente a home
                }, 2500)

            } else { //Altrimenti
                this.errorState = true; //Mostro messaggio di errore
            }
        },
        //Funzioni di validazione
        validateName() {
            if(this.name == "" || this.name.length < 4) {
                this.nameValidity = "invalid";
            } else {
                this.nameValidity = "valid";
            }
        },
        validateLastName() {
            if(this.lastName == "" || this.lastName.length < 4) {
                this.lastNameValidity = "invalid";
            } else {
                this.lastNameValidity = "valid";
            }
        },
        validateEmail() {
            if(this.email == "") {
                this.emailValidity = "invalid";
            } else {
                this.emailValidity = "valid";
            }
        },
        validateMessage() {
            if(this.message == "") {
                this.messageValidity = "invalid";
            } else {
                this.messageValidity = "valid";
            }
        },
    }
}
</script>

<style lang="scss" scoped>
    #contact-form {
        margin-top: $margin-mid;
        width: $form-container-width;
        
        form {
            padding: $margin-max 0 $margin-max;

            .form-control {

                label {
                    display: block;
                    margin-bottom: $margin-min;
                }

                input, textarea {
                    padding: $margin-min $margin-min - 5;
                    border-radius: 3px;
                    box-shadow: none;
                    transition: $transition-time;
                    border: none;

                    &:focus {
                        box-shadow: 0px 0px 5px 2px $form-box-shadow-color;
                        outline: none;
                    }

                    &.invalid {
                        background-color: $background-form-error;
                    }
                }
                
                &.submit {

                    button {
                        display: inline-block;
                        border: none;
                        padding: $margin-min $margin-max;
                        margin: 0;
                        text-decoration: none;
                        background-color: $secondary-color;
                        color: $primary-color;
                        font-size: 1rem;
                        cursor: pointer;
                        text-align: center;
                        transition: $transition-time;
                        -webkit-appearance: none;
                        -moz-appearance: none;
                        font-weight: $button-font-weight;

                        &:hover, &:focus {
                            background-color: $button-color-hover;
                            color: $secondary-color;

                        }

                        &:focus {
                            outline: 1px solid $inner-bar-primary-color;
                            outline-offset: -4px;
                        }

                        &:active {
                            transform: scale(0.90);
                        }
                    }

                    .recaptcha-policy {
                        font-size: 12px;
                        max-width: 50%;

                        a {
                            color: $secondary-color;
                            text-decoration: underline;
                            transition: $transition-time;

                            &:hover {
                                color: $selected-color;
                            }
                        }
                    }

                    p {
                        font-size: 16px;
                        margin-top: $margin-mid;
                    }
                }

                .error {
                    font-size: $error-form-font-font-size;
                    margin-top: $margin-min;
                    margin-bottom: $margin-min;
                    overflow: visible;
                }
            }
        }
    }

    @media (max-width: $smartphone-max-breakpoint) {
        form {
            display: block;

            .form-control {
                margin-bottom: $margin-mid;
            }
        }
    }

    @media (min-width: $smartphone-max-breakpoint + 1) and (max-width: $tablet-max-breakpoint) {
        form {

            .form-control {

                &.submit {
                    grid-row-start: 3;
                    justify-self: center;
                }
            }
        }
    }

    @media (min-width: $smartphone-max-breakpoint + 1) {
        form {
            display: grid;
            align-items: center;
            grid-template-columns:  50% 50%;
            grid-template-rows:  25% 25% 65% 25%;

            .form-control {
                input, textarea {
                    margin-left: 2px;
                }

                &.message {
                    grid-row-start: 3;
                }

                &.submit {
                    grid-row-start: 3;
                }
            }
        }
    }
</style>