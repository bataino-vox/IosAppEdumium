<template>
  <ion-page>
    <ion-header>
      <app-header title="Apply Leave" :backButton="true" />
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-list>
        <list-component
          title="Apply Date - 87/66/5099"
          bodyWidth="230px"
          height="20px"
          v-for="work in homeWorks"
          :key="work"
        >
          <template v-slot:header-end>
            <icon icon="ic:round-file-download" height="15" class="mx-2" />
            <icon icon="ri:pencil-fill" height="15" class="mx-2" />
            <icon icon="ion:trash" height="15" class="mx-2" />
          </template>
          <div class="w-100 pe-2">
            <div class="d-flex justify-content-between mb-1 w-100">
              <span class="fw-bold me-1"> From Date </span>
              <span class=""> 10/11/2021 </span>
              <span class="fw-bold ms-2 me-1"> To Date </span>
              <span class=""> Created by Joe </span>
            </div>
          </div>
          <template v-slot:body-status>
            <ion-badge
              color="success"
              v-if="work.status"
              mode="md"
              class="text-sm text-light"
              >APPROVED</ion-badge
            >
            <ion-badge
              color="warning"
              v-else
              mode="md"
              class="text-sm text-light"
              >PENDING</ion-badge
            >
          </template>
        </list-component>
      </ion-list>
      <ion-fab vertical="bottom" horizontal="end" slot="fixed">
        <ion-fab-button color="secondary m-2 mb-3">
          <icon icon="ion:add" class="text-white fs-1" />
        </ion-fab-button>
      </ion-fab>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonBadge, IonFab, IonFabButton } from '@ionic/vue';
import ListComponent from "@/components/ListComponent";

export default {
  name: "ApplyLeave",
  components: {
    IonBadge,
    IonFab,
    IonFabButton,
    ListComponent,
  },
  data() {
    return {
      homeWorks: [
        "",
        "",
        {
          status: true,
        },
        "",
      ],
    };
  },
};
</script>

<style scoped>
</style>
