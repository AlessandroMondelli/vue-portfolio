<template>
    <div class="inner-skills" >
        <h4 id="extra" @click="toggleTab">Miscellaneous <font-awesome-icon class="arrow-icon" :class="{ active: extraOpen }" :icon="fontArrow"/></h4>
        <transition-group name="skill-list"> 
            <div v-if="extraOpen" class="skills-wrapper">
                <div class="skill-value clearfix" v-for="extraSkill in extraSkills" :key="extraSkill">
                    <p><font-awesome-icon class="skills-icon" :icon="extraSkill.icon"/>{{ extraSkill.extra }}</p>
                    <div class="perc-bar-container">
                        <div class="perc-bar">
                            <div class="inner-perc-bar" :style="{ width: extraSkill.perc + '%' }"></div>
                        </div>
                    </div>
                </div>
            </div>
        </transition-group> 
    </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGitAlt } from '@fortawesome/free-brands-svg-icons'
import { faFilm } from '@fortawesome/free-solid-svg-icons'
import { faImages } from '@fortawesome/free-solid-svg-icons'
import { faMicrosoft } from '@fortawesome/free-brands-svg-icons'
import { faWordpress } from '@fortawesome/free-brands-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

export default {
    components: {
        FontAwesomeIcon
    },
    props: [ 'extraStatus' ],
    data() {
        return {
            tab: 'extra',
            extraOpen: false,
            extraSkills: [
                { extra: "GIT Versioning", perc: 85, icon: faGitAlt },
                { extra: "Wordpress", perc: 75, icon: faWordpress },
                { extra: "Adobe Premiere Pro", perc: 70, icon: faFilm },
                { extra: "Adobe Photoshop", perc: 55, icon: faImages },
                { extra: "Microsoft Office", perc: 70, icon: faMicrosoft },
            ],
            fontArrow: faChevronRight,
        }
    },
    methods: {
        toggleTab() { //Al click sulla tab
            this.extraOpen = !this.extraOpen; //Aggiorno stato

            this.$emit('toggle-tab', this.tab, this.extraOpen); //Invio a HardSkills.vue
        }
    },
    watch: {
        extraStatus(newVal) { //Se ricevo nuovo stato 
            this.extraOpen = newVal; //Aggiorno valore e chiudo tab
        }
    }
}
</script>

<style lang="scss" scoped>
    h4 {
        margin-bottom: $margin-mid;
        display: inline-block;

        &:hover {
            cursor: pointer;
        }

        .arrow-icon {
            transition: $transition-time;

            &.active {
                transform: rotate(90deg);
            }
        }
    }

    .skill-list-enter-from {
        max-height: 0;
        overflow: hidden;
        transition: all 0.5s;
    }

    .skill-list-enter-to {
        max-height: 500px;
        overflow: hidden;
        transition: all 0.5s;
    }

    .skill-list-leave-from {
        max-height: 500px;
        overflow: hidden;
        transition: all 0.5s;
    }

    .skill-list-leave-to {
        max-height: 0;
        overflow: hidden;
        transition: all 0.5s;
    }

    .skill-value {

        .skills-icon {
            margin-right: $margin-min - 5;
        }

        .perc-bar-container {
            height: $bar-height;

            .perc-bar {
                @include imgWidthHeight($bar-width, $bar-height);
                margin-top: $margin-min - 5;
                background-color: $secondary-color;

                .inner-perc-bar {
                    height: $bar-height;
                    transition: $transition-time;
                    background-color: $inner-bar-primary-color;
                }
            }        
        }
    }

    @media (max-width: $smartphone-max-breakpoint) {
        .skill-value {

            p, .perc-bar-container {
                display: block;
            }

            p {
                margin-bottom: $margin-min;
            }

            .perc-bar-container {
                width: 100%;
                margin-bottom: $margin-mid;     
            }
        }
    }

    @media (min-width: $smartphone-max-breakpoint + 1) {
        .skill-value {

            p, .perc-bar-container {
                float: left;
            }

            p {
                margin-bottom: 20px;
                width: 30%;

            }

            .perc-bar-container {
                width: 70%;      
            }
        }
    }
</style>