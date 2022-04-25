<template>
  <ion-page>
    <app-header title="Examination" />
    <ion-content :fullscreen="true">
      <list-component title="MONTHLY TEST" smalltitle=" " titleIcon="healthicons:i-exam-qualification" v-for="exam in exams" :key="exam" height="20">
          <template v-slot:body-status>
            <span class="small px-2 text-primary my-2">
              <Icon icon="healthicons:i-exam-qualification" class="text-dark" height="20" />
              Exam Result
            </span>
            <span class="small px-2 text-primary">
              <Icon icon="ion:time-outline" height="20" class="my-2 text-dark"/>
              Exam Schedule
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
