<template>
  <ion-page>
    <ion-header >
      <app-header title="Online Exam" backButton="true" />
    </ion-header >
    <ion-content>
      <ion-content >
      <list-component title="Online Practical Exam" height="20" bodyWidth="100%">
        <template v-slot:header-end>
          <div class="text-primary pe-2" >
            <icon icon="ion:arrow-redo-sharp" class="text-dark" /> 
            view
          </div>
        </template>
        <div class="d-flex justify-content-between mb-1 pe-2 flex-wrap" > 
              <div class="d-flex justify-content-between mb-1 pe-2" style="min-width:50%" v-for="day in exams" :key="day"> 
                    <span class="fw-bold">
                        HomeWork Date
                    </span>
                    <span class="">
                        10/11/2021
                    </span>
                </div>
                </div></list-component>
    </ion-content>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonContent } from '@ionic/vue';
import ListComponent from '@/components/ListComponent.vue';

export default {
  name: 'ExamPage',
  components: { ListComponent, IonHeader, IonContent, IonPage },
  data(){
    return { 
      exams: [
        {
          exam_from:'',
          to:'',
          quiz:'',
          duration:'',
        }, '', '', ''
      ]
    }
  }
};
</script>
