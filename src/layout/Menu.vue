<template>
<ion-menu side="start" menu-id="sideMenu" content-id="main">
    <ion-header class="w-100">
        <app-header title="Menu" :isMenu="true" />
    </ion-header>
    <ion-content>
        <div class="d-flex align-items-center border-bottom ion-padding-horizontal ion-primary pb-2" color="danger">
            <ion-thumbnail>
                <img src="https://www.focusedu.org/wp-content/uploads/2018/12/circled-user-male-skin-type-1-2.png" class="" />
            </ion-thumbnail>
            <div class="d-flex ion-padding">
                <ion-label class="century ion-padding-end ion-text-wrap ion-text-sm" style="font-size:80%;">
                    <b>{{ user.username }}</b>
                    <br>
                    {{ user.email }}
                </ion-label>
            </div>
        </div>
        <ion-list class="ion-no-padding century text12 ion-padding-vertical">

            <ion-item lines="full" class="ion-text-capitalize menu-item" v-for="mod in modules" :key="mod.id" @click=" mod.short_code == 'logout' ? this.logout() : this.$router.push(mod.link)">
                <ion-icon :icon="mod.icon" /> 
                <ion-label >
                    {{ mod.name }}
                </ion-label>
            </ion-item>

        </ion-list>
    </ion-content>
    <ion-router-outlet id="main"></ion-router-outlet>
</ion-menu>
</template>

<script>
import { IonHeader, IonContent, IonBackButton, IonButtons, IonToolbar, IonMenu, IonList, IonItem, IonRouterOutlet } from '@ionic/vue';
import { home, arrowBack, cash, person, easel, videocam, calendar, list, listSharp, statsChart, copy, wifi, hourglass, cloudDownload, clipboard, mail, newspaper, personAdd, book, gitNetwork, business, informationCircle, exit } from 'ionicons/icons'      
import { openLoading, dismiss } from '@/functions/widget'
import { logout } from '@/services/student'

export default {
    name: 'SideMenu',
    compnents: {
        IonHeader,
        IonContent,
        IonToolbar,
        IonMenu,
        IonList,
        IonItem,
        IonRouterOutlet,
        IonBackButton,
        IonButtons,
        
    },
    data() {
        return {
            user: {
                username: 'bata',
                email: 'bata@gg.c'

            },
            modules: [{
                    name: "Home",
                    status: 0,
                    short_code: "",
                    icon: home,
                    link:'/'
                },
                {
                    name: "Profile",
                    status: 0,
                    short_code: "",
                    icon: person,
                    link:'/profile'
                },
                {
                    name: "Fees",
                    status: 0,
                    short_code: "",
                    icon: cash,
                    link:'/fees'
                },
                {
                    name: "Online Courses",
                    status: 0,
                    short_code: "",
                    icon: easel,
                    link:'/courses'
                },
                {
                    name: "BBB Live Classes",
                    status: 0,
                    short_code: "",
                    icon: videocam,
                    link:'/classes'
                },
                {
                    name: "Time Table",
                    status: 0,
                    short_code: "",
                    icon: calendar,
                    link:'/timetable'
                },
                {
                    name: "Lesson Plan",
                    status: 0,
                    short_code: "",
                    icon: listSharp,
                    link:'/lessons'
                },
                {
                    name: "Syllabus Status",
                    status: 0,
                    short_code: "",
                    icon: statsChart,
                    link:'/syllabus'
                },
                {
                    name: "Homework",
                    status: 0,
                    short_code: "",
                    icon: copy,
                    link:'/homework'
                },
                {
                    name: "Online Exam",
                    status: 0,
                    short_code: "",
                    icon: wifi,
                    link:'/onlineexam'
                },
                {
                    name: "Apply Leave",
                    status: 0,
                    short_code: "",
                    icon: hourglass,
                    link:'/leave'
                },
                {
                    name: "Download Center",
                    status: 0,
                    short_code: "",
                    icon: cloudDownload,
                    link:'/download'
                },
                {
                    name: "Attendance",
                    status: 0,
                    short_code: "",
                    icon: calendar,
                    link:'/attendance'
                },
                {
                    name: "Examination",
                    status: 0,
                    short_code: "",
                    icon: clipboard,
                    link:'/exam'
                },
                {
                    name: "Notice Board",
                    status: 0,
                    short_code: "",
                    icon: mail,
                    link:'/notice'
                },
                {
                    name: "Timeline",
                    status: 0,
                    short_code: "",
                    icon: list,
                    link:'/timeline'
                },
                {
                    name: "My Documents",
                    status: 0,
                    short_code: "",
                    icon: newspaper,
                    link:'/documents'
                },
                {
                    name: "Teacher Review",
                    status: 0,
                    short_code: "",
                    icon: personAdd,
                    link:'/reviews'
                },
                {
                    name: "Library",
                    status: 0,
                    short_code: "",
                    icon: book,
                    link:'/library'
                },
                {
                    name: "Transport Route",
                    status: 0,
                    short_code: "",
                    icon: gitNetwork,
                    link:'/routes'
                },
                {
                    name: "Hostel",
                    status: 0,
                    short_code: "",
                    icon: business,
                    link:'/hostels'
                },
                {
                    name: "About School",
                    status: 0,
                    short_code: "",
                    icon: informationCircle,
                    link:'/about'
                },
                {
                    name: "Logout",
                    status: 0,
                    short_code: "logout",
                    icon: exit,
                    link:'/logout'
                },
            ],
        }
    },
    methods: {
        async logout() {
            openLoading()
            const loggedOut = await logout()
            if(loggedOut) {
                localStorage.removeItem('token')
                location.href = '/login'
                dismiss()
            }
        }
    },
    created() {},
    setup() {
        return {
            arrowBack
        }
    }
}
</script>

<style scoped>
.menu-item ion-icon {
    padding: 10px;
}

.menu-item {
    font-size: .8rem !important;
    --padding-top: .2rem !important;
    --padding-bottom: .2rem !important;
    --padding-start: 20px !important;

    --background-hover: Lightgray !important;
    --border-color: white;
}

.menu-item:hover {
    --background: var(--ion-color-step-550, lightgray) !important;
}

.menu-item:active {
    --background: var(--ion-color-step-550, lightgray) !important;
}
</style>
