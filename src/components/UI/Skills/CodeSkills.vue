<template>
    <div class="inner-skills" >
        <h4 id="code" @click="toggleTab">Programming Languages & Frameworks <font-awesome-icon class="arrow-icon" :class="{ active: codeOpen }" :icon="fontArrow"/></h4>
        <transition-group name="skill-list"> 
            <div v-if="codeOpen" class="skills-wrapper">
                <div class="skill-value clearfix" v-for="codeSkill in codeSkills" :key="codeSkill">
                    <p><font-awesome-icon class="skills-icon" :icon="codeSkill.icon"/>{{ codeSkill.lang }}</p>
                    <div class="perc-bar-container">
                        <div class="perc-bar">
                            <div class="inner-perc-bar" :style="{ width: codeSkill.perc + '%' }"></div>
                        </div>
                    </div>
                </div>
            </div>
        </transition-group>
    </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHtml5 } from '@fortawesome/free-brands-svg-icons'
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons'
import { faBootstrap } from '@fortawesome/free-brands-svg-icons'
import { faJs } from '@fortawesome/free-brands-svg-icons'
import { faVuejs } from '@fortawesome/free-brands-svg-icons'
import { faPhp } from '@fortawesome/free-brands-svg-icons'
import { faLaravel } from '@fortawesome/free-brands-svg-icons'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

export default {
    name: 'codeSkill',
    components: {
        FontAwesomeIcon,
    },
    props: [ 'codeStatus' ],
    data() {
        return {
            tab: 'code',
            codeOpen: false,
            codeSkills: [
                { lang: "HTML", perc: 90, icon: faHtml5 },
                { lang: "CSS/SCSS", perc: 90, icon: faCss3Alt },
                { lang: "Bootstrap", perc: 70, icon: faBootstrap },
                { lang: "JS", perc: 80, icon: faJs },
                { lang: "JQuery", perc: 78, icon: faJs },
                { lang: "Vue.js", perc: 75, icon: faVuejs },
                { lang: "PHP", perc: 65, icon: faPhp },
                { lang: "Laravel", perc: 63, icon: faLaravel },
                { lang: "MySql", perc: 60, icon: faDatabase },
            ],
            fontArrow: faChevronRight,
        }
    },
    methods: {
        toggleTab() { //Al click sulla tab
            this.codeOpen = !this.codeOpen; //Aggiorno stato

            this.$emit('toggle-tab', this.tab, this.codeOpen); //Invio a HardSkills.vue
        },
    },
    watch: {
        codeStatus(newVal) { //Se ricevo nuovo stato 
            this.codeOpen = newVal; //Aggiorno valore e chiudo tab
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

    .skills-wrapper {

        .skill-value {

            p, .perc-bar-container {
                float: left;
            }

            p {
                margin-bottom: 20px;
                width: 30%;

                .skills-icon {
                    margin-right: 5px;
                }   
            }

            .perc-bar-container {
                width: 70%;
                height: 20px;

                .perc-bar {
                    @include imgWidthHeight($bar-width, $bar-height);
                    margin-top: 5px;
                    background-color: $secondary-color;

                    .inner-perc-bar {
                        height: 20px;
                        transition: $transition-time;
                        background-color: $inner-bar-primary-color;
                    }
                }        
            }
        }
    }
</style>