<template>
  <ion-page>
    <app-header title="Examination" />
    <ion-content :fullscreen="true">
      <list-component title="Update on Covid-19'" smalltitle="Date:2029-86-08" titleIcon="line-md:external-link" v-for="exam in exams" :key="exam" height="20">
          <template v-slot:body-status>
            <span class="small px-2 text-primary">
                <Icon icon="line-md:external-link" class="text-dark" height="15" />
                view
            </span>
        </template>
      </list-component>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent } from '@ionic/vue';
import ListComponent from '@/components/ListComponent.vue';
import { Icon } from '@iconify/vue'

export default {
  name: 'ExamPage',
  components: { ListComponent,  IonContent, IonPage, Icon},
  data() {
      return {
          exams: ['', '', {
              status: 1
          }, '', '']
      }
  }
};
</script>
