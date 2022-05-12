<template>
  <ion-page>
     <ion-header>
        <app-header title="My Documents" :backButton="true" />
    </ion-header>
    <ion-content >
      
      <list-component title="Marksheet" titleIcon="ion:clipboard" bodyWidth="200px" height="50px" v-for="doc in docs" :key="doc">
        <div class="d-flex mt-3">
          <icon icon="ion:document" class="fs-6 my-auto" />
          <div class="my-auto px-1 " >
            Sample.pdf
          </div>
        </div>
        <template v-slot:body-status >
          <ion-item >
            <icon icon="ion:arrow-down-circle" class="fs-1 mx2" />
          </ion-item >
        </template>
      </list-component>
       <ion-fab vertical="bottom" horizontal="end" slot="fixed">
        <ion-fab-button color="secondary m-2 mb-3">
          <icon icon="ion:add" class="text-white fs-1" />
        </ion-fab-button>
      </ion-fab>
    </ion-content>
  </ion-page>
</template>

<script>
import { } from '@ionic/vue';

export default {
  name: 'ExamPage',
  components: {  },
  data() {
    return {
      docs:['','','']
    }
  }
};
</script>
