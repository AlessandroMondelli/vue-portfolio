<template>
    <div id="home-section">
        <div id="jumbotron">
            <h1>
                <span id="typed-text">{{ typeValue }}</span>
                <span id="cursor-text" :class="{ 'typing': typeStatus }">&nbsp;</span>
            </h1>
        </div>
        <div id="me-photo">
            <div id="photo-wrap"> 
                <img :class="{ 'active': typeStatus }" src="@/assets/me_best.png" alt="foto Alessandro Mondelli">
            </div>
        </div>
        <div class="icon-link">
            <a href="https://www.linkedin.com/in/alessandro-mondelli-5b15971a1/" target="_blank" rel=”noopener”><font-awesome-icon class="inner-icon" :icon="fontLinkedin"/></a>
        </div>
    </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default {
    components: {
        FontAwesomeIcon,
    },
    data() {
        return {
            fontLinkedin: faLinkedin,
            typeValue: '',
            typeStatus: false,
            typeArray: ['Alessandro Mondelli', 'jr. web developer', 'front-end', 'back-end'],
            typingSpeed: 500,
            erasingSpeed: 100,
            newTextDelay: 150,
            typeArrayIndex: 0,
            charIndex: 0,
        }
    },
    methods: {
        typeText() {
            if(this.charIndex < this.typeArray[this.typeArrayIndex].length) { //Se il contatore delle lettere è minore della lunghezza della frase
                if(!this.typeStatus) { //Se non si sta scrivendo
                    this.typeStatus = true; //Attivo stato di scrittura
                }

                this.typeValue += this.typeArray[this.typeArrayIndex].charAt(this.charIndex); //Aggiungo lettera a frase prendendola dalla stringa in array, con posizione in charIndex
                this.charIndex += 1; //Incremento charIndex

                setTimeout(this.typeText, this.newTextDelay); //Richiamo funzione per aggiungere lettera ad array
            } else { //Altrimenti
                this.typeStatus = false; //Setto lo status di scrittura a false
                setTimeout(this.eraseText, this.newTextDelay); //Richiamo funzione per eliminare testo
            }
        },
        eraseText() {
            if(this.charIndex > 0) { //Se il contatore delle lettere è maggiore di 0
                if(!this.typeStatus) { //Se non si sta scrivendo
                    this.typeStatus = true; //Attivo stato di scrittura
                }

                this.typeValue = this.typeArray[this.typeArrayIndex].substring(0, this.charIndex - 1); //Aggiungo a typeValue lettera di parola dell'array in reverse (eliminazione lettera per lettera)
                this.charIndex -= 1; //Decremento contatore

                setTimeout(this.eraseText, this.erasingSpeed); //Richiamo funzione erase
            } else { //Altrimenti
                this.typeStatus = false; //Setto lo status di scrittura a false
                this.typeArrayIndex += 1; //Passo alla seconda frase

                if(this.typeArrayIndex >= this.typeArray.length) { //Se il contatore non rapprensenta nessun valore dell'array
                    this.typeArrayIndex = 0; //Riparto dal primo valore
                }

                setTimeout(this.typeText, this.typingSpeed); //Richiamo funzione per scrivere testo
            }
        }
    },
    created() {
        setTimeout(this.typeText, this.newTextDelay + 200);
    }
}
</script>

<style lang="scss" scoped>
    #home-section {
        height: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        align-content: space-around;
        position: relative;
        

        #jumbotron {
            display: inline-block;
            margin-left: 2%;
            
            h1 {
                text-transform: uppercase;
                cursor: default;

                span {

                    &#cursor-text {
                        width: 4px;
                        margin-left: 3px;
                        background-color: $secondary-color;
                        animation: cursorBlink 1.2s infinite;    

                        &.typing {
                            animation: none;
                        }
                    }

                    
                }
            }

            @keyframes cursorBlink {
                49% { background-color: $secondary-color; }
                50% { background-color: transparent }
                99% { background-color: transparent }
            }
        }

        #me-photo {
            width: 40%;
            height: 100%;
            position: relative;
            
            #photo-wrap {
                @include imgWidthHeight(400px, 400px);
                background-color: $secondary-color;
                border-radius: 50%;
                position: absolute;
                top: 50%;
                transform: translateY(-50%);

                img {
                    width: 100%;
                    transform: scaleX(-1);
                    margin-left: -50px;
                    position: relative;
                    bottom: 32%;
                    filter: grayscale(100%);
                    transition: $img-transition;

                    &.active {
                        filter: none;
                    }
                }
            }
            
        }

        .inner-icon {

            &:hover {
                color: $linkedin-icon-color;
            }
        }
    }

    @media (max-width: $tablet-max-breakpoint) {
        #jumbotron {
            width: $smartphone-width;

            h1 {
                font-size: $h1-smartphone-font-size;
            }
        }

        #me-photo {
            display: none;
        }
    }

    @media (min-width: $tablet-max-breakpoint + 1) {
        #jumbotron {
            width: 58%;

            h1 {
                font-size: $h1-font-size;
            }
        }

        #me-photo {
            display: inline-block;
        }
    }
</style>