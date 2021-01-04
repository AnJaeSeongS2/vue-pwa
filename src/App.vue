<template>
  <v-app id="app">
    <header>
      <span>Vue.js PWA</span>
    </header>
    <main>
      <img src="./assets/logo.png" alt="Vue.js PWA">
      <router-view></router-view>
    </main>
    <v-btn color="success">Success</v-btn>
    <v-btn color="error">Error</v-btn>
    <v-btn color="warning">Warning</v-btn>
    <v-btn color="info">Info</v-btn>
    <Footer/>
  </v-app>
</template>

<script>
import Footer from '@/components/Footer';

export default {
  name: 'app',
  components: { Footer },
};
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
  margin-top: 96px;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495E;
  color: #ffffff;
  position: fixed;
  top: 0px;
  width: 100%;
  width: -moz-available;          /* WebKit-based browsers will ignore this. */
  width: -webkit-fill-available;  /* Mozilla-based browsers will ignore this. */
  width: fill-available;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}

Footer {
  bottom: 0px;
}

.mdi::before {
  font-size: 24px;
  line-height: 14px;
}
.btn .mdi::before {
  position: relative;
  top: 4px;
}
.btn-xs .mdi::before {
  font-size: 18px;
  top: 3px;
}
.btn-sm .mdi::before {
  font-size: 18px;
  top: 3px;
}
.dropdown-menu .mdi {
  width: 18px;
}
.dropdown-menu .mdi::before {
  position: relative;
  top: 4px;
  left: -8px;
}
.nav .mdi::before {
  position: relative;
  top: 4px;
}
.navbar .navbar-toggle .mdi::before {
  position: relative;
  top: 4px;
  color: #FFF;
}
.breadcrumb .mdi::before {
  position: relative;
  top: 4px;
}
.breadcrumb a:hover {
  text-decoration: none;
}
.breadcrumb a:hover span {
  text-decoration: underline;
}
.alert .mdi::before {
  position: relative;
  top: 4px;
  margin-right: 2px;
}
.input-group-addon .mdi::before {
  position: relative;
  top: 3px;
}
.navbar-brand .mdi::before {
  position: relative;
  top: 2px;
  margin-right: 2px;
}
.list-group-item .mdi::before {
  position: relative;
  top: 3px;
  left: -3px
}
</style>
