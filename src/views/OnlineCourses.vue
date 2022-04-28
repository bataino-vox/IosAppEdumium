<template>
  <ion-page>
    <app-header title="Online Courses" :backButton="true"/>
    <ion-content >
    <ion-card v-for="course in courses" :key="course" >
      <div class="" style="height:150px;overflow:hidden;position:relative">
        <img src="https://ionicframework.com/docs/demos/api/card/madison.jpg" class="w-100" >
        <div class="position-absolute fixed-bottom px-2 bg-gray d-flex align-items-center" style="background:#0009" >
          <ion-thumbnail style="--size:50px">
            <img src="https://www.focusedu.org/wp-content/uploads/2018/12/circled-user-male-skin-type-1-2.png" />
            </ion-thumbnail>
          <div class="small text-start text-white ion-text-capitalize p-1 px-2" style="font-size:80%;">
            Guardian<br>
            <span class="small" >
              Last Updated 08/23/12
            </span>
          </div>
        </div>
      </div>
      <ion-card-header class="py-0 m-0">
        <ion-card-title class="my-0">
          <span class="fs-6" >
             NCERT Solutions for Class Hindi
          </span>
        </ion-card-title>
        <ion-item class=" ion-no-padding"> 
            <ion-card-subtitle slot="start">
                <span >
                  $500
                </span>
            </ion-card-subtitle>
            <ion-card-subtitle slot="end">
                <icon icon="ion:time-outline" />
                <span >
                  16:47:20
                </span>
            </ion-card-subtitle>
        </ion-item>
        <div class="d-flex justify-content-between align-items-center py-2 ion-nopadding ion-nomargin mx-0 w-100">
          <ion-progress-bar value="0.5" class="w-100 m-0" color="success"></ion-progress-bar>
            <span class="text10 ps-2">
              20%
            </span>
        </div>
      </ion-card-header>
      <ion-card-content class="d-flex mw-100">
          <ion-button color="secondary"  class="text-sm w-100">
            <span class=" text-white fw-light">
              Course details
            </span>
          </ion-button>
          <ion-button color="success" class="text-sm w-100">
            <span class=" text-white fw-light">
              Start Lesson
            </span>
          </ion-button>
      </ion-card-content>
    </ion-card>
      
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonCardHeader, IonCardTitle, IonContent } from '@ionic/vue';


export default {
  name: 'ExamPage',
  components: { IonCardHeader, IonCardTitle, IonContent, IonPage },
  data() {
    return { 
      courses:['d','d','d','']
    }
  }
};
</script>
