<template>
  <ion-page>
     <ion-header>
        <app-header title="BBB Live Classes" :backButton="true" />
    </ion-header>
    <ion-content >
      <list-component title="Math Online Class" height="20" bodyWidth="150px" v-for="clas in classes" :key="clas">
            <template v-slot:header-end>
                <div class="text-primary small px-3">
                    <icon icon="ion:enter-outline" class="text-dark mb-1" height="15" />
                    Join
                </div>
            </template>
            <span class="fw-bold">
              Date: <br>
              Class :
            </span>
            <span>
              12/00/2303<br>
              Year 2 SM 2
            </span>
            <template v-slot:body-status>
                <ion-badge color="success" mode="md" v-if="1==1" class="fw-normal small text-light my-auto" >Paid</ion-badge>
                <ion-badge color="danger" v-else class="small text-light" >Unpaid</ion-badge>
            </template>
        </list-component>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonBadge } from '@ionic/vue';

export default {
  name: 'ExamPage',
  components: { IonBadge },
  data(){
    return {
      classes: ['','','','']
    }
  }
};
</script>
