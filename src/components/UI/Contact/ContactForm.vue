<template>
    <div id="contact-form">
        <form>
            <div class="form-control name">
                <label>Nome</label>
                <input type="text" name="nome" id="nome" placeholder="Inserisci il tuo nome" required />
            </div>
            <div class="form-control last-name">
                <label>Cognome</label>
                <input type="text" name="cognome" id="cognome" placeholder="Inserisci il tuo cognome" required />
            </div>
            <div class="form-control email">
                <label>Email</label>
                <input type="email" name="email" id="email" placeholder="Inserisci la tua email" required />
            </div>
            <div class="form-control message">
                <label>Messaggio</label>
                <textarea type="text" rows="10" cols="30" name="messaggio" id="messaggio" placeholder="Scrivi qualcosa.." required />
            </div>
            <div class="form-control submit">
                <button id="submit">Invia</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    #contact-form {
        margin-top: $margin-mid;
        width: 75%;
        
        form {
            display: grid;
            grid-template-columns:  50% 50%;
            grid-template-rows:  25% 25% 65% 25%;
            align-items: center;

            .form-control{

                &.message {
                    grid-row-start: 3;
                }

                &.submit {
                    grid-row-start: 4;
                }

                label {
                    display: block;
                    margin-bottom: $margin-min;
                }

                input, textarea {
                    padding: 5px 5px;
                    border-radius: 3px;
                    box-shadow: none;
                    transition: $transition-time;

                    &:focus {
                        box-shadow: 0px 0px 4px 2px $form-box-shadow-color;
                        outline: none;
                        outline-offset: none;
                    }
                }

                button {
                    display: inline-block;
                    border: none;
                    padding: 10px 25px;
                    margin: 0;
                    text-decoration: none;
                    background-color: $secondary-color;
                    color: $primary-color;
                    font-size: 1rem;
                    cursor: pointer;
                    text-align: center;
                    transition: background 250ms ease-in-out, 
                                transform 150ms ease;
                    -webkit-appearance: none;
                    -moz-appearance: none;
                    font-weight: 500;

                    &:hover, &:focus {
                        background-color: $button-color-hover;
                        color: $secondary-color;

                    }

                    &:focus {
                        outline: 1px solid $inner-bar-primary-color;
                        outline-offset: -4px;
                    }

                    &:active {
                        transform: scale(0.99);
                    }
                }
            }
        }
    }
</style>