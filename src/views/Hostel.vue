<template>
  <ion-page>
    <ion-header>
        <app-header title="Notice" />
    </ion-header>
    <ion-content class="ion">
      <div class="bg-l-gray shadow-sm mb-2 py-3 p-2 d-flex justify-content-between"  v-for="hostel in hostels" :key="hostel">
          <div class="" >
            <icon icon="ion:business" class="fs-4 me-1" />
            <span class="small text-sm" >
              Girls Hostel
            </span>
          </div>
           <div class="small px-2 text-primary text-sm my-auto">
                <icon icon="ion:arrow-redo-sharp" class="text-dark" height="15" />
                view
            </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import {  } from '@ionic/vue';


export default {
  name: 'Tab3Page',
  components: {  },
   data() {
        return {
            hostels: ['', '', {
                status: 1
            }, '', '']
        }
    }
};
</script>
