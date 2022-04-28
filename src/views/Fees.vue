<template>
<ion-page>
    <app-header title="Fees" />
    <ion-content class="positio-relative" >
        <div slot="fixed" class="bg-white w-100">
            <list-component title="Grand Total"  class="text-center" bodyWidth="90%" height="20">
                <span class="ms-2">
                Amount<br>
                $56,000
                </span>
                <span>
                Amount<br>
                $56,000
                </span>
                <span>
                Amount<br>
                $56,000
                </span>
                <span>
                Amount<br>
                $56,000
                </span>
            </list-component>
        </div>
      <ion-list style="margin-top:100px">
        <list-component title="School Assignment" v-for="fee in fees" :key="fee">
          <template v-slot:header-end>
              <span class="text-primary small px-2 fw-bold">
                  <span class="fw-6">
                      $
                  </span>
                  Pay
              </span>
              <span class="small px-2 text-primary">
                  <icon icon="ion:arrow-redo-sharp" class="text-dark" height="15" />
                  view
              </span>
          </template>
          <span class="">
                <span>
                    Fees Code
                </span><br>
                <span>
                    Due Date
                </span><br>
                <span>
                    Due Date
                </span><br>
                <span>
                    Due Date
                </span>
            </span>
            <span class="">
                <span>
                    Admission Fees
                </span><br>
                <span>
                    25/09/2039
                </span><br>
                <span>
                    25/09/2039
                </span><br>
                <span>
                    25/09/2039
                  </span>
            </span>
            <template v-slot:body-status>
              <ion-badge color="success" mode="md" v-if="fee.status==1" class="small text-light text-sm" >Paid</ion-badge>
              <ion-badge color="danger" mode="md" v-else class="small text-light text-sm" >Unpaid</ion-badge>
          </template>
        </list-component>
      </ion-list>
    </ion-content>
</ion-page>
</template>

<script>
/* eslint-disable */ 
import { IonPage,  IonContent, IonList, IonItem } from '@ionic/vue';

import ListComponent from '@/components/ListComponent'

export default {
    name: 'StudentFees',
    components: {
        IonContent,
        IonPage,
        IonList,
        IonItem,
       
        ListComponent,
    },
    data() {
        return {
            fees: ['', '', {
                status: 1
            }, '', '']
        }
    }
};
</script>

<style scoped>

</style>
