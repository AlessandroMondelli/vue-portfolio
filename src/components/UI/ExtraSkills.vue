<template>
    <div class="inner-skills">
        <h4 @click="extraOpen = !extraOpen">Miscellaneous</h4>
        <transition name="fade">
            <div v-if="extraOpen" class="skills-wrapper">
                <div class="skill-value clearfix" v-for="extraSkill in extraSkills" :key="extraSkill">
                    <p>{{ extraSkill.extra }}</p>
                    <div class="perc-bar-container">
                        <div class="perc-bar">
                            <div class="inner-perc-bar" :style="{ width: extraSkill.perc + '%' }"></div>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'ExtraSkill',
    data() {
        return {
            extraOpen: false,
            extraSkills: [
                { extra: "GIT Versioning", perc: 80 },
                { extra: "Adobe Premiere Pro", perc: 65 },
                { extra: "Adobe Photoshop", perc: 55 },
                { extra: "Microsoft Office", perc: 60 },
            ],
        }
    }
}
</script>

<style lang="scss" scoped>
    h4 {
        margin-bottom: $margin-mid;

        &:hover {
            cursor: pointer;
        }
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    
    .fade-enter, .fade-leave-to {
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