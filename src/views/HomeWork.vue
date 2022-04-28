<template>
<ion-page>
    <ion-header>
        <app-header title="HomeWork" />
    </ion-header>
    <ion-content :fullscreen="true">
        <ion-list>
            <list-component title="Assignment" smalltitle="Class B" bodyWidth="" v-for="work in homeWorks" :key="work">
                <template v-slot:header-end>
                    <icon icon="ic:round-file-download" height="20" />
                    <span class="text-primary small px-2">
                        <icon icon="ion:arrow-redo-sharp" height="20" />
                        view
                    </span>
                </template>
                <div class="w-100 ps-2" style="font-size:10px;max-width:220px !important;">
                    <div class="d-flex justify-content-between mb-1 w-100">
                        <span class="">
                            HomeWork Date
                        </span>
                        <span class="">
                            10/11/2021
                        </span>
                        <span class="">
                            Created by Joe
                        </span>
                    </div>
                    <div class="d-flex justify-content-between mb-1 w-100">
                        <span class="">
                            HomeWork Date
                        </span>
                        <span class="">
                            10/11/2021
                        </span>
                        <span class="">
                            Created by Joe
                        </span>
                    </div>
                    <div class="d-flex justify-content-between mb-1 w-100">
                        <span class="">
                            HomeWork Date
                        </span>
                        <span class="">
                            10/11/2021
                        </span>
                        <span class="">
                            Created by Joe
                        </span>
                    </div>
                </div>
                <template v-slot:body-status>
                    <ion-badge color="success" v-if="work.status" mode="md" class="small  text-light">Completed</ion-badge>
                    <ion-badge color="danger" v-else  mode="md" class="small text-light ">InComplete</ion-badge>
                </template>
            </list-component>
        </ion-list>
    </ion-content>
</ion-page>
</template>

<script>
import { IonPage, IonHeader, IonContent, IonList } from '@ionic/vue';

import ListComponent from '@/components/ListComponent'

export default {
    name: 'HomeWork',
    components: {
        IonHeader,
        IonContent,
        IonPage,
        IonList,
       
        ListComponent
    },
    data() {
        return {
            homeWorks: ['', '', {
                status: true
            }, '']
        }
    }
};
</script>

<style scoped>

</style>
