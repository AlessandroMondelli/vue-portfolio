<template>
    <h3>Soft</h3>
    <div class="inner-skills">
        <p class="soft-skill" v-for="softSkill in softSkills" :key="softSkill"> {{ softSkill }} </p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            softSkills: ["Orientamento all'obiettivo", "Team Working", "In continua formazione", "Spirito di Adattamento", "Problem Solving", "Capacità di lavorare in autonomia"],
        }
    }
}
</script>

<style lang="scss" scoped>
    h3 {
        margin-bottom: $margin-mid;
    }

    .soft-skill {
        margin-bottom: $margin-mid;
    }
</style>