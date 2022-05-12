<template>
  <ion-page>
    <app-header title="Teacher's Review" :backButton="true" />
    <ion-content >
      
      <list-component title="Teacher's Name" titleIcon="ion:person-add" height="50px" bodyWidth="200px" v-for="review in reviews" :key="review">
        <template v-slot:header-end >
          <ion-badge class="p-2 text-sm text-light" color="success" >
            Class teacher
          </ion-badge>
          <review-star style="max-width:70px" :review="2" />
        </template>
        <div class="my-auto py-2" >
          <div class="" >
            <icon icon="ion:call-outline" class="my-auto me-1" />
            <ion-text>
              33446677
            </ion-text>
          </div>
          <div class="mt-2" >
            <icon icon="ion:mail-outline" class="my-auto me-1" />
            <ion-text>
              batino@voxforem.org
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
import ReviewStar from '@/components/ReviewStar'

export default {
  name: 'TeacherReview',
  components: {
    ReviewStar
  },
  data() {
    return {
      reviews: ['', '', '']
    }
  }
};
</script>

<style scoped>
ion-button {
  --color:white !important;

  
}
</style>