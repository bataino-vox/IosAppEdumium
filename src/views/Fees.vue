<template>
<ion-page>
    <app-header title="Fees" />
    <ion-content :fullscreen="true" style="--padding-top:100px">
      <list-component title="Grand Total" class="text-center fixed fixed-top" bodyWidth="90%" height="20" style="padding-top:42px">
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
      <ion-list>
        <list-component title="School Assignment" v-for="fee in fees" :key="fee">
          <template v-slot:header-end>
              <span class="text-primary small px-2 fw-bold">
                  <span class="fw-6">
                      $
                  </span>
                  Pay
              </span>
              <span class="small px-2 text-primary">
                  <Icon icon="line-md:external-link" class="text-dark" height="15" />
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
              <ion-badge color="success" v-if="fee.status==1" class="small text-light" >Paid</ion-badge>
              <ion-badge color="danger" v-else class="small text-light" >Unpaid</ion-badge>
          </template>
        </list-component>
      </ion-list>
    </ion-content>
</ion-page>
</template>

<script>
/* eslint-disable */ 
import { IonPage,  IonContent, IonList, IonItem } from '@ionic/vue';
import { Icon } from '@iconify/vue'
import ListComponent from '@/components/ListComponent'

export default {
    name: 'StudentFees',
    components: {
        IonContent,
        IonPage,
        IonList,
        IonItem,
        Icon,
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
