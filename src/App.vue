<template>
  <div id="all-wrap">
    <main-menu />
    <router-view id="rendered-view"/>
  </div>
</template>

<script>
import MainMenu from "./components/layout/MainMenu.vue";

export default {
  components: {
    MainMenu,
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

h3 {
  font-size: $h3-font-size;
}

h4 {
  font-size: $h4-font-size;
}

p {
  font-size: $p-font-size;
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
  width: 95vw;
  height: 100vh;
  overflow: hidden;
  background-color: $primary-color;
  color: $secondary-color;
}

.section-wrap {
  width: 80%;
  margin: 10% auto;
}
</style>
