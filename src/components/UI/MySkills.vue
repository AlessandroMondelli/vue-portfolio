<template>
    <div class="section-wrap">
        <h2 class="section-title">Skills</h2>
        <div class="content-container clearfix">
            <div class="floated-container hard">
                <hard-skill></hard-skill>
            </div>
            <div class="floated-container soft">
                <soft-skills></soft-skills>
            </div>
        </div>
    </div>
</template>

<script>
import SoftSkills from './Skills/SoftSkills.vue'
import HardSkill from './Skills/HardSkills.vue'

export default {
    components: {
        SoftSkills, HardSkill
    },
}
</script>

<style lang="scss" scoped>
    .content-container {
        
        .floated-container {
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