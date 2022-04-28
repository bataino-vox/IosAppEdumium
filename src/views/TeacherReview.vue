<template>
  <ion-page>
    <app-header title="Examination" />
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 3</ion-title>
        </ion-toolbar>
      </ion-header>
      
      <ListComponent name="Tab 3 page" />
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ListComponent from '@/components/ListComponent.vue';

export default {
  name: 'ExamPage',
  components: { ListComponent, IonHeader, IonToolbar, IonTitle, IonContent, IonPage }
};
</script>
