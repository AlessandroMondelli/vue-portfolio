<template>
    <h3>Hard</h3>
    <div class="inner-skills" id="OS">
        <h4 @click="osOpen = !osOpen">OS</h4>
        <transition name="fade">
            <div v-if="osOpen" class="skills-wrapper">
                <div class="skill-value clearfix" v-for="osSkill in osSkills" :key="osSkill">
                    <p>{{ osSkill.os }}</p>
                    <div class="perc-bar-container">
                        <div class="perc-bar">
                            <div class="inner-perc-bar" :style="{ width: osSkill.perc + '%' }"></div>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
    <div class="inner-skills" id="code">
        <h4 @click="codeOpen = !codeOpen">Programming Languages & Frameworks</h4>
        <transition name="fade">               
            <div v-if="codeOpen" class="skills-wrapper">
                <div class="skill-value clearfix" v-for="codeSkill in codeSkills" :key="codeSkill">
                    <p>{{ codeSkill.lang }}</p>
                    <div class="perc-bar-container">
                        <div class="perc-bar">
                            <div class="inner-perc-bar" :style="{ width: codeSkill.perc + '%' }"></div>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
    <extra-skill></extra-skill>
</template>

<script>
import ExtraSkill from '../UI/ExtraSkills.vue'

export default {
    name: 'HardSkill',
    components: {
        ExtraSkill
    },
    data() {
        return {
            osOpen: false,
            codeOpen: false,
            osSkills: [
                { os: "Windows", perc: 90 },
                { os: "Linux", perc: 65 },
            ],
            codeSkills: [
                { lang: "HTML", perc: 90 },
                { lang: "CSS/SCSS", perc: 90 },
                { lang: "Bootstrap", perc: 70 },
                { lang: "JS", perc: 80 },
                { lang: "JQuery", perc: 78 },
                { lang: "Vue.js", perc: 75 },
                { lang: "PHP", perc: 65 },
                { lang: "Laravel", perc: 63 },
                { lang: "MySql", perc: 60 },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
    h3 {
        margin-bottom: $margin-mid;
    }

    h4 {
        margin-bottom: $margin-min;
        cursor: pointer;
    }

    .fade-enter-active {
        transition: all .3s ease;
    }

    .fade-leave-active {
        transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }

    .fade-enter, .fade-leave-to
        /* .slide-fade-leave-active below version 2.1.8 */ {
        transform: translateX(10px);
        opacity: 0;
    }

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
</style>