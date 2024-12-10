import './assets/style.css';
import './assets/animation.css';
import { createApp, defineAsyncComponent } from 'vue';
import App from './App.vue';
import router from './router/index.js';
import { createPinia } from 'pinia';
const pinia = createPinia();

const CButton = defineAsyncComponent({ loader: () => import('@/components/CButton.vue'), });
const CIcon = defineAsyncComponent({ loader: () => import('@/components/CIcon.vue'), });
const CInput = defineAsyncComponent({ loader: () => import('@/components/CInput.vue'), });
const CTextarea = defineAsyncComponent({ loader: () => import('@/components/CTextarea.vue'), });

const app = createApp(App);
app.component('CButton', CButton);
app.component('CIcon', CIcon);
app.component('CInput', CInput);
app.component('CTextarea', CTextarea);
app.use(router);
app.use(pinia);
app.mount('#app');
