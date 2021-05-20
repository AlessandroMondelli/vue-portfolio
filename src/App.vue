<template>
  <div id="all-wrap">
    <main-menu @sendRoute="getRoute" />
    <div id="main-content">
      <router-view id="rendered-view" v-slot="{ Component }">
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
  overflow: hidden;
}

.clearfix::after {
  content: "";
  display: table;
  clear: both;
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
  height: $all-height-container;
  overflow: hidden;
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
    bottom: 1%;
    right: 1%;

    .inner-icon {
        font-size: 40px;
        color: $secondary-color;
        transition: $transition-time;
    }
}

#main-content {
  background-color: $primary-color;
  width: inherit;
  height: 100vh;
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

//Media query
@media (max-width: $smartphone-max-breakpoint) {
  #rendered-view {
    width: $smartphone-width-container;
  }
}

@media (min-width: $smartphone-max-breakpoint + 1) {
  #rendered-view {
    width: $all-width-container;
  }
}
</style>
