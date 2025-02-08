import './assets/style.css';
import './assets/animation.css';
import { createApp } from 'vue';
import App from './App.vue';

import CButton from '@/components/CButton.vue';
import CIcon from '@/components/CIcon.vue';
import CInput from '@/components/CInput.vue';
import CTextarea from '@/components/CTextarea.vue';

const app = createApp(App);
app.component('CButton', CButton);
app.component('CIcon', CIcon);
app.component('CInput', CInput);
app.component('CTextarea', CTextarea);
app.mount('#app');
