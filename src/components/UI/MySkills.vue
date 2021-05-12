<template>
    <div class="section-wrap">
        <h2 class="section-title">Skills</h2>
        <div class="content-container clearfix">
            <div class="skills-container hard">
                <hard-skill></hard-skill>
                <extra-skill></extra-skill>
            </div>
            <div class="skills-container soft">
                <soft-skills></soft-skills>
            </div>
        </div>
    </div>
</template>

<script>
import SoftSkills from '../UI/SoftSkills.vue'
import HardSkill from '../UI/HardSkills.vue'
// import ExtraSkill from '../UI/ExtraSkills.vue'

export default {
    name: 'MySkills',
    components: {
        SoftSkills, HardSkill, //ExtraSkill
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