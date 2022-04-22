<template>
<ion-toolbar class="salm">
    <ion-buttons slot="start" v-if="isMenu">
         <ion-button class="icon-only" @click="closeSideMenu">
            <ion-icon :icon="arrowBack" class=""/>
        </ion-button>
    </ion-buttons>
    <ion-buttons slot="start" v-else>
        <ion-button class="icon-only" @click="openSideMenu">
            <ion-icon :icon="menu"></ion-icon>
        </ion-button>
    </ion-buttons>
    <ion-buttons slot="end" v-if="!isMenu">
        <ion-button class="text-dark">
            <Icon icon="clarity:notification-solid" height="20" />
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
import { IonButtons, IonTitle, IonToolbar, menuController } from '@ionic/vue'
import {menu, arrowBack} from 'ionicons/icons'
import { Icon } from '@iconify/vue';

export default {
    name: 'AppHeader',
    props: ['title','isMenu'],
    components: {
        IonButtons,
        IonTitle,
        IonToolbar,
        Icon
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
