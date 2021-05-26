<template>
  <div id="all-wrap">
    <main-menu @sendRoute="getRoute" />
    <div id="main-content">
      <router-view id="rendered-view" :class= componentActive v-slot="{ Component }">
        <transition :name="componentTransition">
          <component :is="Component"/>
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script>
import MainMenu from "./components/layout/MainMenu.vue";

export default {
  components: {
    MainMenu,
  },
  data() {
    return {
      componentActive: '',
      componentsList: ['/', 'chi-sono', 'skills', 'progetti', 'contattami'],
      componentTransition: "",
    }
  },
  methods: {
    getRoute(route) { //Prendo route ricevuta da MainMenu
      if(this.componentsList.indexOf(this.componentActive) > this.componentsList.indexOf(route)) { //Se la route scelta si trova dopo di quella attuale
        this.componentTransition = "slideBottom"; //Attivo slide bottom 
      } else { //Altrimenti
        this.componentTransition = "slideUp"; //Attivo slide up 
      }

      this.componentActive = route; //Aggiorno route attuale
    }
  },
  created(){ 
      if(this.$router.path !== process.env.BASE_URL){ //Se al lifehook "Created()" la pagina non è l'homepage
          this.$router.replace(process.env.BASE_URL); //Setto la pagina a homepage
      }
    }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600;700&display=swap');

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;  
  font-family: 'Montserrat', sans-serif;
}

.clearfix::after {
  content: "";
  display: table;
  clear: both;
}

h4 {
  font-weight: 600;
}

a {
  color: inherit;
  text-decoration: none;
}

.section-title {
  font-size: $h2-font-size;
  margin-bottom: 50px;
}

#all-wrap {
  display: flex;
  flex-wrap: nowrap;
}

#rendered-view {
  background-color: $primary-color;
  color: $secondary-color;
}

.section-wrap {
  width: 80%;
  margin: 10% auto;
}

.floated-container {
  float: left;
}  

.icon-link {
    position: absolute;

    .inner-icon {
        font-size: 40px;
        color: $secondary-color;
        transition: $transition-time;
    }
}

//Media query
@media (max-width: $smartphone-max-breakpoint) {
  #all-wrap {
    flex-direction: column;

    h2 {
      font-size: $h2-smartphone-font-size;
    }

    h3 {
      font-size: $h3-smartphone-font-size;
    }

    h4 {
      font-size: $h4-smartphone-font-size;
    }

    p {
      font-size: $p-smartphone-font-size;
    }

    #main-content {
      margin-top: 10vh;
    
      #rendered-view {
        width: $smartphone-width-container;
        height: $smartphone-height-container;
        padding: 15% 0 15%;
        
        &:not(.chi-sono, .skills, .progetti, .contattami) {
          overflow-y: hidden;
        }
      }
    }
  }

  .icon-link {
    @include iconPosition(2%, 10%);
  }

  //Slide Up

.slideUp-enter-active,
.slideUp-leave-active {
  transition: all 1s ease-out;
}


.slideUp-enter-to {
  position: absolute;
  bottom: 0;
}


.slideUp-enter-from {
  position: absolute;
  bottom: -85%;
}


.slideUp-leave-to {
  position: absolute;
  top: -85%;
}


.slideUp-leave-from {
  position: absolute;
  top: 0;
}

//Slide Bottom

.slideBottom-enter-active,
.slideBottom-leave-active {
  transition: all 1s ease-out;
}


.slideBottom-enter-to {
  position: absolute;
  top: 0;
}


.slideBottom-enter-from {
  position: absolute;
  top: -85%;
}


.slideBottom-leave-to {
  position: absolute;
  bottom: -85%;
}


.slideBottom-leave-from {
  position: absolute;
  bottom: 0;
}
}

@media (min-width: $smartphone-max-breakpoint + 1) {
  #rendered-view {
      width: $all-width-container;
      height: $all-height-container;
    }

  .icon-link {
    @include iconPosition(2%, 2%);
  }


  //Slide Up

  .slideUp-enter-active,
  .slideUp-leave-active {
    transition: all 1s ease-out;
  }


  .slideUp-enter-to {
    position: absolute;
    bottom: 0;
  }


  .slideUp-enter-from {
    position: absolute;
    bottom: -100%;
  }


  .slideUp-leave-to {
    position: absolute;
    top: -100%;
  }


  .slideUp-leave-from {
    position: absolute;
    top: 0;
  }

  //Slide Bottom

  .slideBottom-enter-active,
  .slideBottom-leave-active {
    transition: all 1s ease-out;
  }


  .slideBottom-enter-to {
    position: absolute;
    top: 0;
  }


  .slideBottom-enter-from {
    position: absolute;
    top: -100%;
  }


  .slideBottom-leave-to {
    position: absolute;
    bottom: -100%;
  }


  .slideBottom-leave-from {
    position: absolute;
    bottom: 0;
  }
}

@media (max-width: $tablet-max-breakpoint) {
    h2 {
      font-size: $h2-smartphone-font-size;
    }

    h3 {
      font-size: $h3-smartphone-font-size;
    }

    h4 {
      font-size: $h4-smartphone-font-size;
    }

    p {
      font-size: $p-smartphone-font-size;
    }

    #rendered-view {
      overflow-y: auto;
    }
}

@media (min-width: $tablet-max-breakpoint + 1) {

  #main-content {
    background-color: $primary-color;
    width: inherit;
    height: $all-height-container;
  }

  /** Scrollbar **/

  /* width */
  ::-webkit-scrollbar {
    width: $scrollbar-width;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: $scrollbar-track;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: $scrollbar-thumb;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: $scrollbar-hover;
  }

  /**/

  #all-wrap {
    flex-direction: row;

    h2 {
      font-size: $h2-font-size;
    }

    h3 {
      font-size: $h3-font-size;
    }

    h4 {
      font-size: $h4-font-size;
    }

    p {
      font-size: $p-font-size;
    }
  }
}

@media (min-width: $large-min-breakpoint) {
  * {
    overflow: hidden;
  }

  #rendered-view {
    overflow-y: auto;
  }
}
</style>
