<template>
<ion-page>
    <ion-header>
        <app-header title="Library" :backButton="true" />
    </ion-header>
    <ion-content :fullscreen="true">
        <list-component title="Multoplocation and Division TextBook" titleIcon="ion:book" bodyWidth="100%;max-width:400px">
            <template v-slot:header-sub>
                <div class="small text-muted">
                    some info
                </div>
            </template>
            <div class="pt-2">
                <div class="d-flex">
                    <icon icon="ion:calendar-outline" class="fs-1 my-auto" />
                    <div class="ps-1 small">
                        <span>
                            Issue date
                        </span><br>
                        <span>
                            10/09/7090
                        </span>
                    </div>
                </div>
                <div class="d-flex pt-3">
                    <icon icon="ion:calendar-outline" class="fs-1 my-auto" />
                    <div class="ps-1 small">
                        <span>
                            Issue date
                        </span><br>
                        <span>
                            10/09/7090
                        </span>
                    </div>
                </div>
            </div>
            <div class="pt-2">
                <div class="d-flex">
                    <icon icon="ion:book-outline" class="fs-1 my-auto" />
                    <div class="ps-1 small">
                        <span>
                            Book No
                        </span><br>
                        <span>
                            10/09/7090
                        </span>
                    </div>
                </div>
                <div class="d-flex pt-3">
                    <icon icon="ion:book-outline" class="fs-1 my-auto" />
                    <div class="ps-1 small">
                        <span>
                            Status
                        </span><br>
                        <ion-badge class="small" color="danger">
                          Not Returned
                        </ion-badge>
                    </div>
                </div>
            </div>
              <div class="pt-2">
                <div class="d-flex">
                      <icon icon="ion:calendar-outline" class="fs-1 my-auto" />
                      <div class="ps-1 small">
                          <span>
                              Due Return date
                          </span><br>
                          <span>
                              10/09/7090
                          </span>
                      </div>
                  </div>
                </div>
        </list-component>
    </ion-content>
</ion-page>
</template>

<script>
import {} from '@ionic/vue';

export default {
    name: 'ExamPage',
    components: {}
};
</script>
