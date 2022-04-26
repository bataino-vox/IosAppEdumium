<template>
  <ion-page>
      <ion-content class="text-start">
        <div class="text-start" >
            <div class="d-flex justify-content-between text-start text-sm px-3 p-2" v-for="(detail,key,index) in details" :key="detail" :ke="index" style="max-width:300px">
                <span class="" >
                    {{ key }} :
                </span>
                <span class="" >
                    {{ detail }}
                </span>
            </div>
        </div>
      </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent } from '@ionic/vue';

export default {
  name: 'App',
  components: {
      IonPage,
      IonContent
  },
  data(){
      return {
          details : {
              'Admission Date': "03/33/33",
              'Date of Birth' : "04/55/45",
              "Catgory" : "General",
              Religion: "Muslim"
          }
      }
  }

};
</script>