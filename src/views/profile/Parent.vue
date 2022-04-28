<template>
  <ion-page>
    <ion-content>
    <div class="d-flex align-items-center border shadow-sm mb-2 ion-padding-horizontal ion-primary pb-2 py-2" v-for="(parent,key,index) in parents" :key="parent" color="danger" style="!important">
        <ion-thumbnail style="--size:100px">
            <img src="https://www.focusedu.org/wp-content/uploads/2018/12/circled-user-male-skin-type-1-2.png" class="" />
            <div class="small text-center ion-text-capitalize pb-1" style="font-size:80%;">
                {{ key }}
            </div>
        </ion-thumbnail>
        <div class="d-flex ion-padding text-start" :title="index">
            <ion-label class="century ion-padding-end ion-text-wrap ion-text-sm" style="font-size:80%;">
                <div >
                    <icon icon="ion:person" class="me-2" height="20"/>
                    {{ parent.name }}
                </div>
                <br>
                 <div class="">
                    <icon icon="ion:call" class="me-2" height="20"/>
                    {{ parent.tel }}
                </div>
                <br>
                 <div >
                    <icon icon="ion:briefcase" class="me-2" height="20"/>
                    {{ parent.occupation }}
                </div>
            </ion-label>
        </div>
    </div>
    <div class="d-flex align-items-center border shadow-sm mb-2 ion-padding-horizontal ion-primary pb-2 py-2" color="danger" style="!important">
        <ion-thumbnail style="--size:100px">
            <img src="https://www.focusedu.org/wp-content/uploads/2018/12/circled-user-male-skin-type-1-2.png" class="" />
            <div class="small text-center ion-text-capitalize pb-1" style="font-size:80%;">
               Guardian
            </div>
        </ion-thumbnail>
        <div class="d-flex ion-padding text-start">
            <ion-label class="century ion-padding-end ion-text-wrap ion-text-sm" style="font-size:80%;">
                <div >
                    <icon icon="ion:person" class="me-2" height="20"/>
                    {{ guardian.name }}
                </div>
                <br>
                 <div >
                    <icon icon="ion:call" class="me-2" height="20"/>
                    {{ guardian.tel }}
                </div>
                <br>
                 <div >
                    <icon icon="ion:briefcase" class="me-2" height="20"/>
                    {{ guardian.occupation }}
                </div>
                <br>
                 <div >
                    <icon icon="ion:accessibility" class="me-2" height="20"/>
                    {{ guardian.relation }}
                </div>
                <br>
                 <div >
                    <icon icon="ion:mail" class="me-2" height="20"/>
                    {{ guardian.mail }}
                </div>
                <br>
                 <div >
                    <icon icon="ion:location" class="me-2" height="20"/>
                    {{ guardian.location }}
                </div>
            </ion-label>
        </div>
    </div>
    </ion-content>
  </ion-page>
</template>

<script>

import { IonPage, IonContent } from '@ionic/vue';


export default {
  name: 'ParentPage',
  components: {
     
      IonPage,
      IonContent
  },
  data(){
      return {
          parents:{
              father: {
                name:'Oliver Twist',
                tel:'088 99 333 4',
                occupation: 'Lawyer'
              },
              mother: {
                name:'Caroline Thoma',
                tel:'08866 733',
                occupation: 'Teacher'
              },
             
          },
          guardian: {
                name:'Oliver Twist',
                tel:'088 99 333 4',
                occupation: 'Lawyer',
                relation:'father',
                mail:'batino@voxforem',
                location:'West brok'
              }
      }
  }

};
</script>