<template>
<div id="" class="d-block p-0 m-0 w-100 shadow-sm  ion-no-padding my-2" lines="" style="overflow:show" color="">
    <div class="d-block small mx-0 px-0 w-100" style="">
        <div class="d-flex justify-content-between w-100 bg-l-gray px-2 w-100 mx-0 py-2 small px-1"> 
            <span class="ps-1">
                <icon :icon="titleIcon" class='text-dark' height='15' v-if="titleIcon"/>
                {{ title }}
            </span>
            <span>
                <div class="d-flex align-items-center justify-content-end" style="min-width:140px">
                    <slot name ="header-end" ></slot>
                </div>
            </span>
        </div>
        <div :class="smalltitle ? '': 'd-flex p-2'" class="w-100 bg-white " :style="'min-height:' + (height ?? '100px !important')">
            <div v-if="smalltitle" class="d-flex justify-content-between w-100 p-2 small" style="">
                <span class="small ps-2">
                    {{ smalltitle }}
                </span>
                <span class="pe-2">
                    <slot name="body-status"></slot>
                </span>
            </div>
            <div class="small w-100">
                <div class="d-flex justify-content-between ms-2 mb-1" :style="'font-size:10px;width:' + (bodyWidth ?? '250px;')">
                    <slot></slot>
                </div>
            </div>
            <span v-if="!smalltitle" class="pe-2">
                <slot name="body-status" ></slot>
            </span>
        </div>
    </div>
</div>
<!-- <list-component title="Assignment">
    <template v-slot:header-end>
        
    </template>
    <template v-slot:body-status>
        <ion-badge color="success" v-if="fee.status==1" class="small text-light" >Paid</ion-badge>
        <ion-badge color="danger" v-else class="small text-light" >Unpaid</ion-badge>
    </template>
</list-component> -->
</template>

<script>


export default {
    name: 'ListComponent',
    props: ['title','height', 'bodyWidth','smalltitle','titleIcon'],
    components: {
    }
};
</script>

<style scoped>
#container {
    text-align: center;
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
}

#container strong {
    font-size: 20px;
    line-height: 26px;
}

#container p {
    font-size: 16px;
    line-height: 22px;
    color: #8c8c8c;
    margin: 0;
}

#container a {
    text-decoration: none;
}
</style>
