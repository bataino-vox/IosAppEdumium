<template>
  <ion-page>
    <ion-header >
      <app-header title="Attendance" :backButton="true" />
    </ion-header>
    <ion-content >
      <v-calendar class="w-100 border-0 shadow-sm" :attributes="attrs" />
      <div class="d-flex flex-wrap p-4">
        <div v-for="color in attrs" :key="color"  class="me-3 mt-2 d-flex align-items-center" :style="'color:'+color.dot" >
          <icon icon="carbon:dot-mark" class="fs-5"/>
          <span class="text-dark ion-text-capitalize ms-2" >
            {{ color.key }}
          </span>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>

export default {
  name: 'ExamPage',
  components: {  },
  data() {
    const year = new Date().getFullYear();
    const month = new Date().getMonth();
    return {
       attrs: [
        {
          key: 'present',
          dot: 'green',
          dates: [new Date(year, month, 23 )],
        },
         {
          key: 'absent',
          dot: 'red',
          dates: [new Date(year, month, 22 )],
        },
         {
          key: 'late',
          dot: 'purple',
          dates: [new Date(year, month, 2 )],
        },
         {
          key: 'holiday',
          dot: 'gray',
          dates: [new Date(year, month, 12 )],
        },
         {
          key: 'half day',
          dot: 'blue',
          dates: [new Date(year, month, 15 )],
        },
      ],
      colors :[
        { desc:'', color:'' },
        { desc:'', color:'' },
        { desc:'', color:'' },
        { desc:'', color:'' },
        { desc:'Holiday', color:'text-muted' },
        { desc:'Half Day', color:'text-primary' },
      ]
    }
  }
};
</script>
