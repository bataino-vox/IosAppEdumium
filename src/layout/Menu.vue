<template>
<ion-menu side="start" menu-id="sideMenu" content-id="main">
    <ion-header class="w-100">
      <app-header title="Menu" :isMenu="true" />
    </ion-header>
    <ion-content> 
      <div class="d-flex align-items-center ion-padding-horizontal ion-primary" color="primary">
          <ion-thumbnail>
            <img src="https://www.focusedu.org/wp-content/uploads/2018/12/circled-user-male-skin-type-1-2.png" class=""/>
          </ion-thumbnail>
          <div class="d-flex ion-padding">
            <ion-label class="century ion-padding-end ion-text-wrap ion-text-sm" style="font-size:80%;">
              <b>{{ user.username }}</b>
              <br>
              {{ user.email }}
            </ion-label>
          </div>
      </div>
      <ion-item-divider style="margin:0px !important"/>
      <ion-list class="ion-no-padding century text12 ion-padding-vertical" >

          <ion-item lines="full"  class="ion-text-capitalize menu-item" v-for="module in modules" :key="module.id" href="/profile">
            <ion-icon :icon="module.icon" /> {{ module.name }}
          </ion-item>
       
      </ion-list>
    </ion-content>
     <ion-router-outlet id="main"></ion-router-outlet>
  </ion-menu>


</template>

<script>

import { IonHeader, IonContent, IonBackButton, IonButtons, IonToolbar, IonMenu, IonList, IonItem, IonRouterOutlet } from '@ionic/vue';
// import { openLoading, openToast } from "@/functions/widget"
// import { remove, getObject } from "@/functions/storage"
// import { logout } from '@/services/user'
import { Icon } from '@iconify/vue';

import { home, arrowBack, cash, person, easel, videocam, calendar, list, listSharp, statsChart, copy, wifi, hourglass, cloudDownload, clipboard, mail, newspaper, personAdd, book, gitNetwork, business, informationCircle, exit } from 'ionicons/icons'      
export default {
    name:'SideMenu',
    compnents:{
        IonHeader,
        IonContent,
        IonToolbar,
        IonMenu,
        IonList,
        IonItem,
        IonRouterOutlet,
        IonBackButton,
        IonButtons,
        Icon
    },
    data(){
      return {
        user: {
            username: 'bata',
            email:'bata@gg.c'

        },
        modules:[
          {name:"Home", status:0 , short_code:"", icon:home},
          {name:"Profile", status:0 , short_code:"", icon:person},
          {name:"Fees", status:0 , short_code:"", icon:cash},
          {name:"Online Courses", status:0 , short_code:"", icon:easel},
          {name:"BBB Live Classes", status:0 , short_code:"", icon:videocam},
          {name:"Time Table", status:0 , short_code:"", icon:calendar},
          {name:"Lesson Plan", status:0 , short_code:"", icon:listSharp},
          {name:"Syllabus Status", status:0 , short_code:"", icon:statsChart},
          {name:"Homework", status:0 , short_code:"", icon:copy},
          {name:"Online Exam", status:0 , short_code:"", icon:wifi},
          {name:"Apply Leave", status:0 , short_code:"", icon:hourglass},
          {name:"Download Center", status:0 , short_code:"", icon:cloudDownload},
          {name:"Attendance", status:0 , short_code:"", icon:calendar},
          {name:"Examination", status:0 , short_code:"", icon:clipboard},
          {name:"Notice Board", status:0 , short_code:"", icon:mail},
          {name:"Timeline", status:0 , short_code:"", icon:list},
          {name:"My Documents", status:0 , short_code:"", icon:newspaper},
          {name:"Teacher Review", status:0 , short_code:"", icon:personAdd},
          {name:"Library", status:0 , short_code:"", icon:book},
          {name:"Transport Route", status:0 , short_code:"", icon:gitNetwork},
          {name:"Hostel", status:0 , short_code:"", icon:business},
          {name:"About School", status:0 , short_code:"", icon:informationCircle},
          {name:"Logout", status:0 , short_code:"", icon:exit},
        ],
      }
    },
    methods: {
    },
    created(){
    },
    setup(){
      return {
        arrowBack
      }
    }
}
</script>

<style scoped>
.menu-item ion-icon{
  padding: 10px;
}
.menu-item{
  font-size: .8rem !important;
  --padding-top: .2rem !important;
  --padding-bottom: .2rem !important;
  --padding-start: 20px !important;
  
  --background-hover:Lightgray !important;
  --border-color:white;
}
.menu-item:hover {
  --background: var(--ion-color-step-550, lightgray) !important;
}
.menu-item:active{
  --background: var(--ion-color-step-550, lightgray) !important;
}
</style>