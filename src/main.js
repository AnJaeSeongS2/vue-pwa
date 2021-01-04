// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
// eslint-disable-next-line import/first
import Vuetify from 'vuetify';
// eslint-disable-next-line import/first
import 'vuetify/dist/vuetify.min.css';
// eslint-disable-next-line import/first
import '@mdi/font/css/materialdesignicons.css';

Vue.config.productionTip = false;
Vue.use(Vuetify);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  vuetify: new Vuetify({
    icons: {
      iconfont: 'mdi',
    },
  }),
  router,
  template: '<App/>',
  components: { App },
});
