<template>
    <div class="header" @click="showDetail">
       <div class="content-wrapper">

       </div>
       <div class="bulletin-wrapper"></div>
       <div class="background">
          <img :src="seller.avatar" width="100%" height="100%">
       </div>
    </div>
</template>

<script>
export default {
    name:'v-header',
    props:{
       seller:Object,
       default(){
          return {}
       }
    },
    data(){
       return {
          
       }
    },
    methods:{
       showDetail(){
          
       }
    }
}
</script>


