<template>
  <ion-page>
    <ion-header >
      <app-header title="Timetable" backButton="true" />
    </ion-header >
    <ion-content>
      <ion-content >
      <list-component title="Monday" height="20" bodyWidth="100%" v-for="day in timetable" :key="day">
          <div class="w-100 pe-2">
            <ion-row class="w-100 ion-no-padding"> 
              <ion-col>
                <ion-text class="fw-bold" >
                  Time
                </ion-text>
              </ion-col>
              <ion-col >
                <ion-text class="fw-bold" >
                  Subject
                </ion-text>
              </ion-col>
              <ion-col class="ion-text-end">
                <ion-text class="fw-bold " >
                  Room No
                </ion-text>
              </ion-col>
            </ion-row>
            
             <ion-row class="w-100 ion-no-padding" v-for="inf in timetable" :key="inf"> 
              <ion-col>
                <ion-text class="text-gray" >
                  8:00 AM
                </ion-text>
              </ion-col>
              <ion-col >
                <ion-text class="" >
                  Math
                </ion-text>
              </ion-col>
              <ion-col class="ion-text-end">
                <ion-text  >
                  111
                </ion-text>
              </ion-col>
            </ion-row>
          </div>
            <template v-slot:body-status>
            </template>
        </list-component>
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
      timetable: {
        monday:'',
        tuesday:'',
        wednesday:'',
        thursday:'',
        friday:'',
        saturday:'',
        sunday:'',
      }
    }
  }
};
</script>
