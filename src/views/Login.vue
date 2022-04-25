<template>
<ion-page>
    <ion-content :fullscreen="true">
      <div class="h-100 w-100 d-flex align-items-center justify-content-center" >
        <div color="secondary" class="ion-padding-horizontal w-100">
            <ion-input  class="border w-100 bg-white rounded small px-2 mb-3" placeholder="Username" />
            <ion-input  class="border w-100 bg-white rounded small px-2 mb-3" placeholder="******" />
            <button class="btn-primary ion-padding-vertical w-100 rounded small" @click="this.$router.push('/')">
                Login
            </button>
            <ion-button class="ion-hide w-100 rounded small">
                LOGIN
            </ion-button>

        </div>
    </div>
    </ion-content>
  </ion-page>
    
</template>

<script>
import {IonButton, IonInput, IonContent, IonPage } from '@ionic/vue'
export default {
    name:'LoginPage',
    components :{ IonButton, IonInput, IonContent, IonPage  }
}
</script>

<style lang="less" scoped>
ion-content {
    --background: url('../../public/assets/images/pattern-background.jpg') !important;
}
.btn-primary:active, .btn-primary:focus,.btn-primary {
    border:0px !important;
    box-shadow: none !important;
}
</style>