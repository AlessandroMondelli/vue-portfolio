<template>
    <div class="section-wrap">
        <h2 class="section-title">Progetti</h2>
        <div class="content-container clearfix">
            <div class="floated-container project-list">
                <projects-list @openProject="openSelected" :animate-status="animationBoolean"></projects-list>
            </div>
            <div class="floated-container project-description">
                <projects-description @animateStatus="animationStatus" :project-description="description" :project-langs="langs" :project-video="video"></projects-description>
            </div>
        </div>
        <div class="icon-link">
            <a href="https://github.com/AlessandroMondelli" target="_blank" rel=”noopener”><font-awesome-icon class="inner-icon" :icon="githubLogo"/></a>
        </div> 
    </div>    
</template>

<script>
import ProjectsList from '../UI/Projects/ProjectsList.vue'
import ProjectsDescription from '../UI/Projects/ProjectDescription.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default {
    components: {
        ProjectsList, ProjectsDescription, FontAwesomeIcon
    },
    data() {
        return {
            description: '',
            langs: '',
            video: '',
            animationBoolean: '',
            githubLogo: faGithub,
        }
    },
    methods: {
        openSelected(description, langs, video) {
            this.description = description;
            this.langs = langs;
            this.video = video;
        },
        animationStatus(animate) {
            this.animationBoolean = animate;
        }
    }
}
</script>

<style lang="scss" scoped>
    #all-wrap {
        
        #rendered-view {
            
            .inner-icon {

                &:hover {
                    color: $github-icon-color;
                }
            }
        }
    }

    @media (max-width: $smartphone-max-breakpoint) {
        .floated-container {
            
            &.project-list  {
                width: 100%;
                margin-bottom: $margin-mid;
            }

            &.project-description {
                width: 100%;
            }
        }
    }

    @media (min-width: $smartphone-max-breakpoint + 1) {
        .floated-container {

            &.project-list {
                width: 35%;
            }

            &.project-description {
                width: 65%;
            }
        }
    }
</style>