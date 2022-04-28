<template>
  <ion-page>
    <ion-header>
        <app-header title="Notice" />
    </ion-header>
    <ion-content :fullscreen="true">
      <list-component title="Update on Covid-19" smalltitle="Date:2029-86-08" v-for="note in notice" :key="note" height="20">
            <template v-slot:body-status>
              <span class="small px-2 text-primary">
                  <icon icon="ion:arrow-redo-sharp" class="text-dark" height="15" />
                  view
              </span>
          </template>
        </list-component>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonContent } from '@ionic/vue';
import ListComponent from '@/components/ListComponent.vue';


export default {
  name: 'Tab3Page',
  components: { ListComponent, IonHeader,  IonContent, IonPage },
   data() {
        return {
            notice: ['', '', {
                status: 1
            }, '', '']
        }
    }
};
</script>
