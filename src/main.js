import { createApp } from 'vue';
import './assets/css/style.css';
import App from './App.vue';
import './assets/css/app.css';
import router from './router';
import store from './store';

createApp(App)
    .use(store)
    .use(router)
    .mount('#app')
