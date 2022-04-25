<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button v-for="tab in tabs" :key="tab.name" :tab="'/'+tab.name" @click="this.$router.push(tab.name)">
          <ion-icon :icon="tab.icon" />
            <ion-label class="ion-text-capitalize">
              {{ tab.name }}
            </ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script>
import { defineComponent } from 'vue';
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { home, clipboard, mail,cash, create } from 'ionicons/icons';

export default defineComponent({
  name: 'TabsPage',
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage, IonRouterOutlet },
  data(){
    return {
      tabs : [
        {name:"home",icon:home,cash:""},
        {name:"homework",icon:clipboard,link:""},
        {name:"fees",icon:cash,link:""},
        {name:"notice",icon:mail,link:""},
        {name:"exam",icon:create,link:""}
      ]
    }
  },
  setup() {
  }
});
</script>

<style scoped>
  ion-icon, ion-tab-bar{
    padding: 5px;
  }
  ion-tab-button:focus {
    color: black !important;
  }
  ion-tab-button:target {
    color: #428cff !important;
}
</style>
