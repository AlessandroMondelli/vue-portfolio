<template>
    <nav class="menu">
        <router-link v-for="link in links" :key="link" :to="link.route">
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
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
    .menu {
        width: 5vw;
        height: 100vh;
        background-color: $secondary-color;
        display: flex;
        flex-direction: column;
        align-items: center;

        .menu-icon {
            font-size: $icon-size;
            margin-bottom: 20px;
            transition: $transition-time;
            color: $primary-color;

            &:first-child {
                margin-top: 25px;
            }

            &:hover {
                cursor: pointer;
                color: $nav-icons-hover-color;
                transform: scale(0.90);
            }
        }
    }


</style>