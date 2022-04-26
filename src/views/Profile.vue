<template>
<ion-page>
    <ion-header>
        <ion-toolbar>
            <ion-title>Profile</ion-title>
            <ion-buttons slot="start">
                <ion-back-button mode="md"></ion-back-button>
            </ion-buttons>
        </ion-toolbar>
    </ion-header>
    <ion-content>
        <ion-tabs>
              <div class="d-flex align-items-center border-bottom ion-padding-horizontal ion-primary pb-2 py-2" color="danger" style="!important">
                  <ion-thumbnail style="--size:100px">
                      <img src="https://www.focusedu.org/wp-content/uploads/2018/12/circled-user-male-skin-type-1-2.png" class="" />
                  </ion-thumbnail>
                  <div class="d-flex ion-padding text-start">
                      <ion-label class="century ion-padding-end ion-text-wrap text-sm">
                          <b>{{ user.username }}</b>
                          <br>
                          {{ user.email }}
                          <br>
                          Adm. no {{ user.admin_no }}
                          <br>
                          Roll Number {{ user.roll_no }} 
                      </ion-label>
                  </div>
              </div>
          <ion-tab-bar slot="top" class="">
                <ion-tab-button @click="this.$router.push('/profile/personal')" class="ion-text-uppercase">
                    PERSONAL
                </ion-tab-button>
                <ion-tab-button @click="this.$router.push('/profile/parent')" class="ion-text-uppercase">
                    PARENTS
                </ion-tab-button>
                <ion-tab-button @click="this.$router.push('/profile/other')" class="ion-text-uppercase">
                    OTHER
                </ion-tab-button>
            </ion-tab-bar>
            <ion-router-outlet></ion-router-outlet>
        </ion-tabs>
       
    </ion-content>
</ion-page>
</template>

<script>
import { IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, IonLabel, IonThumbnail, IonBackButton, IonButtons, IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
// import ListComponent from '@/components/ListComponent.vue';

export default {
    name: 'ExamPage',
    components: {
        IonRouterOutlet,
        IonTabBar,
        IonTabButton,
        IonTabs,
        IonLabel,
        IonThumbnail,
        IonBackButton,
        IonButtons,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonContent,
        IonPage,
    },
    data() {
        return {
            user: {
                username: 'Bataino',
                email: 'Batino@voxforem.com',
                admin_no: 18001,
                roll_no: 101
            }
        }
    }
};
</script>

<style scoped>
ion-tab-bar {
  --color-selected: red  !important;
}
</style>