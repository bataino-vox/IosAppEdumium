<template>
  <ion-page>
    <app-header title="Routes" :backButton="true" />
    <ion-content :fullscreen="true">
      <list-component title="Brooklyn Center" titleIcon="ion:git-network" height="50px">
        <div class="pt-1" >
          <div class="pb-2 d-nne">
            <icon icon="ion:bus" class="fs-3 me-1" />
            <ion-text>
              VH@2201
            </ion-text>
          </div>
           <div class="pb-2">
            <icon icon="ion:bus" class="fs-3 me-1" />
            <ion-text>
              VH@2201
            </ion-text>
            <ion-text class="text-primary ps-1">
              Assigned
            </ion-text>
          </div>
        </div>
        <template v-slot:body-status>
              <div class="d-flex small text-primary pt-2">
                  <icon icon="ion:arrow-redo-sharp" class="text-dark me-1" height="15" />
                  view
              </div>
          </template>
      </list-component>
    </ion-content>
  </ion-page>
</template>

<script>

export default {
  name: 'ExamPage',
  components: {  }
};
</script>
