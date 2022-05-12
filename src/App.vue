<template>
  <ion-app>
    <Menu />
    <ion-router-outlet />
  </ion-app>
</template>

<script>
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import Menu from '@/layout/Menu.vue';
// import { openLoading } from '@/functions/widget'
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet,
    Menu
  },
  created(){
    const isLoggedIn = localStorage.getItem('token')
    if(!isLoggedIn){
      this.$router.push('/login')
    }
   
  },
  mounted(){
  },
  setup(){
  }
});
</script>