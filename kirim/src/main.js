import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store'; // Import the store
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import '@mdi/font/css/materialdesignicons.css';


// Cek dan set user dari local storage
const savedUser = JSON.parse(localStorage.getItem('user'))
if (savedUser) {
    store.commit('auth/SET_USER', savedUser)
}

const vuetify = createVuetify({
  components,
  directives,
});

const app = createApp(App);
app.use(router);
app.use(store); // Use the store
app.use(vuetify);
app.mount('#app');