<template>
  <ion-page>
    <app-header title="HomeWork" />
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 3</ion-title>
        </ion-toolbar>
      </ion-header>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';

export default {
  name: 'HomeWork',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage }
};
</script>

<style scoped>

</style>