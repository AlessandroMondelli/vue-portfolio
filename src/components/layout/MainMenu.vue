<template>
    <nav class="menu" :class="{ lg:  windowSize > 767, mobile: windowSize < 768 }">
        <router-link @click="sendRoute(link.route)" v-for="link in links" :key="link" :to="link.route">
            <font-awesome-icon class="menu-icon" :icon="link.icon" />
        </router-link>
    </nav>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faBookOpen } from '@fortawesome/free-solid-svg-icons'
import { faFolder } from '@fortawesome/free-solid-svg-icons'
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'

export default {
    components: {
        FontAwesomeIcon,
    },
    data() {
        return {
            links: [
                { route: '/', icon: faHome },
                { route: 'chi-sono', icon: faUser },
                { route: 'skills', icon: faBookOpen }, 
                { route: 'progetti', icon: faFolder }, 
                { route: 'contattami', icon: faPencilAlt },  
            ],
            windowSize: '',
        }
    },
    methods: {
        sendRoute(route) { 
            this.$emit('send-route', route); //Invio route selezionata a App.vue
        },
        myEventHandler() {
            this.windowSize = window.innerWidth;
        }
    },
    mounted() {
        this.windowSize = window.innerWidth; //Prendo larghezza schermo iniziale

        this.$nextTick(() => {
            window.addEventListener("resize", this.myEventHandler); //Aggiungo Event listener per controllare larghezza schermo
        });
    },
    unmounted() {
        window.removeEventListener("resize", this.myEventHandler); //Rimuovo Eventi listener
    },
}
</script>

<style lang="scss" scoped>
    .menu {
        padding-bottom: env(safe-area-inset-bottom);
        padding-left: env(safe-area-inset-left);
        padding-right: env(safe-area-inset-right);
        background-color: $secondary-color;
        align-items: center;


        a.router-link-active {
            
            .menu-icon {
                transform: scale(0.90);
                color: $nav-icons-hover-color;
            }
        } 

        .menu-icon {
            font-size: $icon-size;
            margin-bottom: $margin-mid - 5;
            transition: $transition-time;
            color: $primary-color;

            &:first-child {
                margin-top: $margin-mid;
            }

            &:hover {
                cursor: pointer;
                color: $nav-icons-hover-color;
                transform: scale(0.90);
            }
        }
    }

    @media (max-width: $smartphone-max-breakpoint) {
        .lg.menu {
            display: none;
        }
        .mobile.menu {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            position: fixed;
            top: 0;
            right: 0;
            z-index: 10;
            @include imgWidthHeight(100vw, 10vh);
        }
    }

    @media (min-width: $smartphone-max-breakpoint + 1) {
        .lg.menu {
            display: flex;
            @include imgWidthHeight(5vw, 100vh);
            flex-direction: column;
        }

        .mobile.menu {
            display: none;
        }
    }
</style>