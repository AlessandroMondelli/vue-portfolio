<template>
    <div class="section-wrap">
        <h2 class="section-title">Skills</h2>
        <div class="content-container clearfix">
            <div class="skills-container hard">
                <hard-skill></hard-skill>
            </div>
            <div class="skills-container soft">
                <soft-skills></soft-skills>
            </div>
        </div>
    </div>
</template>

<script>
import SoftSkills from './Skills/SoftSkills.vue'
import HardSkill from './Skills/HardSkills.vue'

export default {
    name: 'MySkills',
    components: {
        SoftSkills, HardSkill
    },
}
</script>

<style lang="scss" scoped>
    .content-container {
        
        .skills-container {
            float: left;

            &.hard {
                width: 70%;
            }

            &.soft {
                width: 30%;
            }
        }
    }
</style>