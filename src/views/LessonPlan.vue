<template>
<ion-page>
    <app-header title="Lesson Plan" :backButton="true" />
    <ion-content>
        <div class="w-100 d-flex p-3 py-2 text-center justify-content-between" color="">
          <icon icon="ion:chevron-back" />
          <ion-text class="text-sm ion-text-center">
            Date
          </ion-text>
          <icon icon="ion:chevron-forward" />
        </div>
        <list-component title="Tuesday" height="20" bodyWidth="100%" v-for="clas in classes" :key="clas">
            <template v-slot:header-end>
              <div class="pe-2">
                26/04/2022
              </div>
            </template>
                <div class="w-100">
                    <ion-row class="w-100 ion-no-padding">
                        <ion-col>
                            <ion-text class="fw-bold">
                                Subject
                            </ion-text>
                        </ion-col>
                        <ion-col>
                            <ion-text class="fw-bold">
                                Time
                            </ion-text>
                        </ion-col>
                        <ion-col class="ion-text-end">
                            <ion-text class="fw-bold ">
                                Syllabus
                            </ion-text>
                        </ion-col>
                    </ion-row>

                    <ion-row class="w-100 ion-no-padding" v-for="inf in timetable" :key="inf">
                        <ion-col>
                            <ion-text class="text-gray">
                                8:00 AM
                            </ion-text>
                        </ion-col>
                        <ion-col>
                            <ion-text class="">
                                Math
                            </ion-text>
                        </ion-col>
                        <ion-col class="ion-text-end">
                            <ion-text>
                                111
                            </ion-text>
                        </ion-col>
                    </ion-row>
                </div>
        </list-component>
    </ion-content>
</ion-page>
</template>

<script>
import { IonPage,  IonContent } from '@ionic/vue';
import ListComponent from '@/components/ListComponent.vue';

export default {
    name: 'LessonPaln',
    components: {
        ListComponent,
        IonContent,
        IonPage,
    },
    data() {
        return {
            classes: ['', '', '', '']
        }
    }
};
</script>
