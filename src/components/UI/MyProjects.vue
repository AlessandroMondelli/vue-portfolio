<template>
    <div class="section-wrap">
        <h2 class="section-title">Progetti</h2>
        <div class="content-container clearfix">
            <div class="floated-container project-list">
                <projects-list @openProject="openSelected"></projects-list>
            </div>
            <div class="floated-container project-description">
                <projects-description :project-description="description" :project-video="video"></projects-description>
            </div>
        </div>
    </div>    
</template>

<script>
import ProjectsList from '../UI/Projects/ProjectsList.vue'
import ProjectsDescription from '../UI/Projects/ProjectDescription.vue'

export default {
    components: {
        ProjectsList, ProjectsDescription
    },
    data() {
        return {
            description: '',
            video: ''
        }
    },
    methods: {
        openSelected(description, video) {
            this.description = description;
            this.video = video;
        }
    }
}
</script>

<style lang="scss" scoped>
    .content-container {

        .floated-container {
            float: left;

            &.project-list {
                width: 35%;
            }

            &.project-description {
                width: 65%;
            }
        }
    }
</style>