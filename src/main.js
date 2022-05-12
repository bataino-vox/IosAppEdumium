import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

import { IonicVue } from '@ionic/vue';
import Header from '@/layout/Header'
import { Icon } from '@iconify/vue'
import { IonHeader, IonPage, IonContent, IonList } from '@ionic/vue'
import ListComponent from '@/components/ListComponent.vue';
import VCalendar from 'v-calendar'
// import { openLoading } from '@/functions/widget'

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';
import 'v-calendar/dist/style.css';

/* Theme variables */
import './theme/variables.css';
import './theme/styles.css';


/* Bootstrap variables */
import '@/theme/bootstrap/css/bootstrap.css';
import '@/theme/bootstrap/css/bootstrap.min.css';



const app = createApp(App)
  .use(IonicVue)
  .use(router)
  // .use(openLoading)
  .use(VCalendar, {})
  .component('app-header', Header)
  .component('icon', Icon)
  .component('ion-header',IonHeader)
  .component('ion-page',IonPage)
  .component('ion-content',IonContent)
  .component('ion-list',IonList)
  .component('list-component',ListComponent)
  
router.isReady().then(() => {
  app.mount('#app');
});