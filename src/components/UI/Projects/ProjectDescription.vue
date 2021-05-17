<template>
    <div id="projects-description">
        <div class="project-description">
            <p>{{ projectDescription }}</p>
            <video :src="projectVideo" autoplay loop></video>
        </div>
    </div>
</template>

<script>
export default {
    props: [ 'projectDescription', 'projectVideo' ],
    data() {
        return {
            description: '',
            video: '',
        }
    }
}
</script>

<style lang="scss" scoped>
    .project-description {
        display: flex;
        flex-direction: column;
        align-items: center;

        p {
            margin-bottom: $margin-mid;
            cursor: default;
        }

        video {
            max-width: 80%;
        }
    }
</style>