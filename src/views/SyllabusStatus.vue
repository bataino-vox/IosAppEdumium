<template>
  <ion-page>
    <app-header title="Syllabus Status" :backButton="true" />
    <ion-content :fullscreen="true">
      <list-component title="HINDI (20)" smalltitle=" " titleIcon="ion:newspaper" v-for="exam in exams" :key="exam" height="20">
          <template v-slot:body-status>
            <span class="small px-2 text-primary my-2">
              <icon icon="ion:list" class="text-dark" height="18" />
              Lesson Topic
            </span>
        </template>
        <template v-slot:header-end >
          <span class="text-sm pe-2" >
            100% Completed
          </span>
        </template>
      </list-component>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent } from '@ionic/vue';
import ListComponent from '@/components/ListComponent.vue';

export default {
  name: 'SyllabusStatus',
  components: { ListComponent,  IonContent, IonPage},
  data() {
      return {
          exams: ['', '', {
              status: 1
          }, '', '']
      }
  }
};
</script>
