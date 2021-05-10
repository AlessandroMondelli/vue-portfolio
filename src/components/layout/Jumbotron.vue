<template>
    <div id="home-section">
        <div id="jumbotron">
            <h1>jr. full stack web developer</h1>
        </div>
        <div id="me-photo">
            <div id="photo-wrap"> 
                <img src="@/assets/me_black_white.png">
            </div>
        </div>
        <div id="linkedin-link">
            <a href="https://www.linkedin.com/in/alessandro-mondelli-5b15971a1/" target="_blank" rel=”noopener”><font-awesome-icon class="jumbo-icon" :icon="fontLinkedin"/></a>
        </div>
    </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default {
    components: {
        FontAwesomeIcon,
    },
    data() {
        return {
            fontLinkedin: faLinkedin,
        }
    }
}
</script>

<style lang="scss" scoped>
    #home-section {
        height: 100vh;
        display: flex;
        justify-content: space-around;
        align-items: center;
        align-content: space-around;
        position: relative;
        

        #jumbotron {
            display: inline-block;
            width: 58%;
            margin-left: 2%;
            
            h1 {
                text-transform: uppercase;
                font-size: 52px;
                cursor: default;
            }
        }

        #me-photo {
            display: inline-block;
            width: 40%;
            height: 100vh;
            position: relative;
            
            #photo-wrap {
                width: 400px;
                height: 400px;
                background-color: $secondary-color;
                border-radius: 50%;
                position: absolute;
                top: 50%;
                transform: translateY(-50%);

                img {
                    width: 100%;
                    transform: scaleX(-1);
                    margin-left: -50px;
                    position: relative;
                    bottom: 32%;
                }
            }
            
        }

        #linkedin-link {
            position: absolute;
            bottom: 1%;
            right: 1%;

            .jumbo-icon {
                font-size: 40px;
                color: $secondary-color;
                transition: $transition-time;

                &:hover {
                    color: $nav-icons-hover-color;
                }
            }
        }
    }
</style>