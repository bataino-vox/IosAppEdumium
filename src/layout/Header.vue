<template>
<ion-toolbar class="salm">
    <ion-buttons slot="start" v-if="backButton">
        <ion-button class="icon-only" @click="this.$router.push('/home')">
            <ion-icon :icon="arrowBack" class=""/>
        </ion-button>
        <ion-back-button defaultHref="/" class="ion-hide" mode="md" ></ion-back-button>
    </ion-buttons>
    <ion-buttons slot="start" v-else-if="isMenu">
         <ion-button class="icon-only" @click="closeSideMenu">
            <ion-icon :icon="arrowBack" class=""/>
        </ion-button>
    </ion-buttons>
    <ion-buttons slot="start" v-else>
        <ion-button class="icon-only" @click="openSideMenu">
            <ion-icon :icon="menu" class="h-100" ></ion-icon>
        </ion-button>
    </ion-buttons>
    <ion-buttons slot="end" v-if="!backButton">
        <ion-button class="text-dark">
            <icon icon="clarity:notification-solid" class="text-dark h-100"  />
        </ion-button>
    </ion-buttons>
    <ion-title class="head text16">
            <b>
                {{ title }}
            </b>
    </ion-title>
</ion-toolbar>
</template>

<script>
import { IonBackButton, IonButtons, IonTitle, IonToolbar, menuController } from '@ionic/vue'
import {menu, arrowBack} from 'ionicons/icons'


export default {
    name: 'AppHeader',
    props: ['title','backButton','isMenu'],
    components: {
        IonBackButton,
        IonButtons,
        IonTitle,
        IonToolbar,
        
    },
    data(){
        return{
            user:{
                points:'000',
                dp:'',
            }
        }
    },
    methods: {
        openSideMenu() {
            menuController.enable(true, 'sideMenu');
            menuController.open('sideMenu');
        },
        closeSideMenu() {
            // menuController.enable(true, 'first');
            menuController.close('sideMenu');
        },
    },
    async created(){
    },
    setup(){
        return {
            menu,
            arrowBack
        }
    }
}
</script>

<style scoped>
 ion-icon {
     color: black;
 }
</style>
