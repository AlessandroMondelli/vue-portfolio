<template>
    <div id="projects-list">
        <ul>
            <li v-for="project in projects" :key="project" :class="{highlight:project.id == selected}" @click="sendProjectData(project.description, project.video), selected = project.id" class="project">{{ project.nome }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            projects: [
                { id:'1', nome: 'Spotify Web Replica', description: 'Riproduzione responsive del layout di Spotify Web', video: require('@/assets/video/demo_spotify.mp4') },
                { id:'2', nome: 'WhatsApp Web Replica', description: 'Riproduzione responsive del layout di Whatsapp Web, con alcune funzioni come ricerca di utenti di una lista, invio di un messaggio con ricezione di una risposta "ok", timestamp di invio messaggio e eliminazione messaggi', video: require('@/assets/video/demo_whatsapp.mp4') },
                { id:'3', nome: 'Boolflix', description: 'Applicazione Web simil Netflix, con film più votati in home page e ricerca per avere informazioni riguardo al film o serie tv ricercato, esegue chiamate REST API al database di TheMovieDB', video: require('@/assets/video/demo_boolflix.mp4')},
                { id:'4', nome: 'BoolPress', description: 'Applicazione Web che simula un blog simil Wordpress, con registrazione utente e CRUD per creare/modificare/eliminare degli articoli' },
                { id:'5', nome: 'BoolBnB', description: 'Applicazione Web che permette di registrarsi ed inserire appartamenti in vendita/affitto, presente funzione di sponsorizzazione con utilizzo di Braintree, funzione di messaggistica e ricerca di appartamenti in base alla zona ricercata' },
                { id:'6', nome: 'Tombola', description: 'Applicazione Web che permette di generare un tabellone della tombola, con possibilità di estrarre numeri casuali e di generare una tabellina(realistica) giocabile' },
                { id:'7', nome: 'COVID-19 Stats', description: 'Applicazione Web per sperimentare AXIOS, permette di effettuare una chiamata REST API per avere informazioni aggiornate sulla situazione COVID-19' },
            ],
            selected: undefined,
        }
    },
    methods: {
        sendProjectData(description, video) { //Al click su progetto
            this.$emit('open-project', description, video); //Invio a MyProjects.vue
        }
    }
}
</script>

<style lang="scss" scoped>
    #projects-list {
        
        ul {
            list-style-type: none;

            li {
                font-size: 24px;
                margin-bottom: 25px;
                transition: $transition-time;
                cursor: default;

                &.highlight {
                    color: $selected-color;
                }

                &:hover {
                    cursor: pointer;
                    color: $selected-color;
                }
            }
        }
    }
</style>