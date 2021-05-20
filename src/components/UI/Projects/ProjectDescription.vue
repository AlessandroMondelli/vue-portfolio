<template>
    <div id="projects-description">
        <div class="project-description">
            <div :class="{ active: animate == true }" class="transition-animation"></div>
            <p>{{ description }}</p>
            <video :src="video" autoplay loop></video>
        </div>
    </div>
</template>

<script>
export default {
    props: [ 'projectDescription', 'projectVideo' ],
    data() {
        return {
            animate: false,
            description: '',
            video: '',
        }
    },
    methods: {
        sendAnimationStatus() {
            this.$emit("animate-status", this.animate);
        }
    },
    watch: {
        projectDescription(newVal) {
            if(newVal) {
                setTimeout( () => {
                    this.description = newVal;
                }, 2000)
            }
        },
        projectVideo(newVal) {
            if(newVal) {
                this.animate = true;
                this.sendAnimationStatus();

                setTimeout( () => {
                    this.video = newVal;
                }, 2000)

                setTimeout( () => {
                    this.animate = false;
                    this.sendAnimationStatus();
                }, 5000)
                
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .project-description {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        height: 500px;

        p {
            padding-bottom: $margin-mid;
            cursor: default;
        }

        video {
            max-width: 85%;
        }
    }

    .transition-animation {
        position: absolute;
        bottom: 100%;
        height: 110%;
        width: 100%;
        border-bottom: 10px solid $secondary-color;
        background-color: $primary-color;
        
        &.active {
            animation-name: moveUp;
            animation-duration: 4s;
            animation-fill-mode: forwards;
        }
    }

    @keyframes moveUp {
        0% {bottom: 100%;}
        25% { bottom: 50%; }
        50% { bottom: -5%; }
        75% { bottom: 50%; }
        100% {bottom: 100%;}
    }


    
</style>