<template>
  <ion-page>
    <ion-header >
      <app-header title="Download Center" :backButton="true" />
    </ion-header>
    <ion-content>
      <ion-tabs>
          <ion-tab-bar slot="top" class="text-sm">
                <ion-tab-button tab="assignment" @click="this.$router.push('./assignment')">
                  ASSIGNMENT
                </ion-tab-button>
                <ion-tab-button tab="study" @click="this.$router.push('./study')">
                  STUDY MATERIAL
                </ion-tab-button>
                <ion-tab-button tab="syllabus" @click="this.$router.push('./syllabus')">
                  SYLABUS
                </ion-tab-button>
                <ion-tab-button tab="others" @click="this.$router.push('./others')">
                  OTHERS
                </ion-tab-button>
          </ion-tab-bar>
          <ion-list >
            <list-component title="Assignment" height="40" bodyWidth="100%" v-for="material in materials" :key="material">
              <template v-slot:header-end >
                20/22/22022
              </template>
              <div class="text-center w-100 text-muted">
                <icon icon="ion:arrow-down-circle" height="40" class="my-2 mx-auto" />
              </div>
            </list-component>
          </ion-list >
          <ion-router-outlet></ion-router-outlet>

      </ion-tabs>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonTabs, IonTabBar, IonTabButton, IonRouterOutlet } from '@ionic/vue';

export default {
  name: 'DownloadCenter',
  components: { IonTabs, IonTabBar, IonTabButton, IonRouterOutlet },
  created(){
    console.log(this.$route.params.tab)
  },
  data(){
    return { 
      materials: ['','','']
    }
  }
};
</script>
