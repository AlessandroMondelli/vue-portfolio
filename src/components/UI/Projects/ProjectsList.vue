<template>
    <div id="projects-list">
        <ul>
            <li v-for="project in projects" :key="project" :class="{highlight:project.id == selected, deactivate:animateStatus == true }" @click="sendProjectData(project.description, project.langUtilized, project.video), selected = project.id" class="project">{{ project.nome }}</li>
            <li>E molto altro su Github!</li>
        </ul>
    </div>
</template>

<script>
export default {
    props: ['animateStatus'],
    data() {
        return {
            projects: [
                { id:'1', nome: 'Spotify Web Replica', description: 'Riproduzione responsive del layout di Spotify Web', langUtilized: "HTML, CSS", video: require('@/assets/video/demo_spotify.mp4') },
                { id:'2', nome: 'WhatsApp Web Replica', description: 'Riproduzione responsive del layout di Whatsapp Web, con alcune funzioni come ricerca di utenti di una lista, invio di un messaggio con ricezione di una risposta "ok", timestamp di invio messaggio e eliminazione messaggi', langUtilized: "HTML, CSS, JS, JQuery", video: require('@/assets/video/demo_whatsapp.mp4') },
                { id:'3', nome: 'Boolflix', description: 'Applicazione Web simil Netflix, con film più votati in home page e ricerca per avere informazioni riguardo al film o serie tv ricercato, esegue chiamate REST API al database di TheMovieDB', langUtilized: "HTML, CSS, JS, JQuery", video: require('@/assets/video/demo_boolflix.mp4')},
                { id:'4', nome: 'BoolPress', description: 'Applicazione Web che simula un blog simil Wordpress, con registrazione utente e CRUD per creare/modificare/eliminare degli articoli', langUtilized: "HTML, CSS, PHP, Laravel, MySQL", video: require('@/assets/video/demo_boolpress.mp4') },
                { id:'5', nome: 'BoolBnB', description: 'Applicazione Web che permette di registrarsi ed inserire appartamenti in vendita/affitto, presente funzione di sponsorizzazione con utilizzo di Braintree, funzione di messaggistica e ricerca di appartamenti in base alla zona ricercata', langUtilized: "HTML, SCSS, Laravel, JS, JQuery, MySQL", video: require('@/assets/video/demo_boolbnb.mp4') },
                { id:'6', nome: 'Tombola', description: 'Applicazione Web che permette di generare un tabellone della tombola, con possibilità di estrarre numeri casuali e di generare una tabellina(realistica) giocabile', langUtilized: "HTML, SCSS, Vue.js CLI", video: require('@/assets/video/demo_tombola.mp4') },
                { id:'7', nome: 'COVID-19 Stats', description: 'Applicazione Web per sperimentare AXIOS, permette di effettuare una chiamata REST API per avere informazioni aggiornate sulla situazione COVID-19', langUtilized: "HTML, SCSS, Vue.js CLI", video: require('@/assets/video/demo_covid.mp4') },
            ],
            selected: undefined,
        }
    },
    methods: {
        sendProjectData(description, langs, video) { //Al click su progetto
            this.$emit('open-project', description, langs, video); //Invio a MyProjects.vue
        }
    }
}
</script>

<style lang="scss" scoped>
    #projects-list {
        
        ul {
            list-style-type: none;

            li:not(:last-child) {
                font-size: $projects-list-font-size;
                margin-bottom: $margin-mid;
                transition: ($transition-time - 0.1);
                cursor: default;

                &.highlight {
                    color: $selected-color;
                    font-weight: $h4-font-weight;
                }

                &.deactivate {
                    pointer-events: none;
                }

                &:hover {
                    cursor: pointer;
                    color: $selected-color;
                }  
            }
        }
    }

    @media (max-width: $smartphone-max-breakpoint) {
        ul {
            margin-bottom: $margin-mid;
        }
    }
</style>