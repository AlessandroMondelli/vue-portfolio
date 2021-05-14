<template>
    <h3>Hard</h3>
    <os-skill @toggleTab="toggleStatus" :os-status="osOpen"></os-skill>
    <code-skills @toggleTab="toggleStatus" :code-status="codeOpen"></code-skills>
    <extra-skill @toggleTab="toggleStatus" :extra-status="extraOpen"></extra-skill>
</template>

<script>
import OsSkill from './OsSkills.vue'
import CodeSkills from './CodeSkills.vue'
import ExtraSkill from './ExtraSkills.vue'

export default {
    name: 'HardSkill',
    components: {
        OsSkill, CodeSkills, ExtraSkill
    },
    data() {
        return {
            osOpen: false,
            codeOpen: false,
            extraOpen: false
        }
    },
    methods: {
        toggleStatus(tab, status) { //Modifico stato toggle in base alla booleana ricevuta
            if(tab == 'os') {
                this.osOpen = status;
                
                if(this.codeOpen) this.codeOpen = false;
                if(this.extraOpen) this.extraOpen = false;
            } else if(tab == 'code')  {
                this.codeOpen = status;
                
                if(this.osOpen) this.osOpen = false;
                if(this.extraOpen) this.extraOpen = false;
            } else if(tab == 'extra') {
                this.extraOpen = status;
                
                if(this.osOpen) this.osOpen = false;
                if(this.codeOpen) this.codeOpen = false;
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    h3 {
        margin-bottom: $margin-mid;
    }
</style>