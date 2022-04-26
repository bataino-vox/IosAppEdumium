<template>
  <ion-app>
    <Menu />
    <ion-router-outlet />
  </ion-app>
</template>

<script>
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import Menu from '@/layout/Menu.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet,
    Menu
  },
  created(){
    // if(this.$isLoggedIn != true){
    //   this.$isLoggedIn = true;
    //   this.$router.push('/login')
    // }
  }
});
</script>