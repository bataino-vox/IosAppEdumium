<template>
  <ion-page>
    <app-header title="Home" />
    <ion-content :fullscreen="true">
      <ion-list>
        <ion-item class="mb-2" lines="full" v-for="dash in dashB" :key="dash.name" color="primary">
          <icon :icon="dash.icon" width="29" slot="start"/>
          <ion-label>
            {{ dash.name }}<br>
            <ion-text class="text-muted small">
                {{ dash.desc }}
            </ion-text>
          </ion-label>
           <ion-label slot="end" class="">
                {{ dash.value }}
            </ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent } from '@ionic/vue';


export default {
  name: 'HomeTab',
  data(){
    return {
      dashB:[
        { name:"Attendance",desc:"This Month", value:"75%", icon:"bi:calendar-check" },
        { name:"HomeWork",desc:"Completed", value:"0", icon:"ion:clipboard" },
        { name:"My Pending Task",desc:"Today's", value:"5", icon:"ion:list-sharp" },
      ],
    }
  },
  components: {  IonContent, IonPage }
};
</script>

<style scoped>
ion-item{
  font-size: 70%;
  --padding-top: 2px;
  --padding-bottom: 2px;
  --border-color: var(--ion-color-primary)!important;
}
</style>