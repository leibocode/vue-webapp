<template>
    <div class="header" @click="showDetail">
       <div class="content-wrapper">
           <div class="avatar">
              <img width="64" height="64" :src="seller.avatar">
           </div>
           <div class="content">
              <div class="title">
                 <span class="brand"></span>
                 <span class="name">{{seller.name}}</span>
              </div>
              <div class="description">
                 {{seller.description}}/{{seller.deliveryTime}}分钟送达
              </div>
              <div></div>
           </div>
           <div v-if="seller.supports" class="support">
              <support-ico :szie=1 :type="seller.supports[0].type"></support-ico>
              <span class="text">{{seller.support[0].description}}</span>
           </div>
           <div v-if="seller.supports" class="support.count">
              <span class="count">{{seller.supports.length}}</span>
              <i class="icon-keyboard_arrow_right"></i>
           </div>
       </div>
       <div class="bulletin-wrapper">
          <span class="bulletin-title"></span><span class="bulletin-text">{{seller.bulletin}}</span>
          <i class="icon-keyboard_arrow_right"></i>
       </div>
       <div class="background">
          <img :src="seller.avatar" width="100%" height="100%">
       </div>
    </div>
</template>

<script>
import SupportIco from 'components/support-ico/support-icoq'
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
    },
    components:{
       SupportIco
    }
}
</script>

<style lang="stylus" scoped>
  @import "~common/stylus/mixin";
  @import "~common/stylus/variable";

  .header
    position:relative
    overflow:hidden
    color:$color-background-ss
    .content-wrapper
      position:relative
      display:flex
      aliag-items:center
      padding:24px 12px 18px 24px
      .avatar
        flex:0 0 64px
        width:64px
        margin-right:2px
        img 
         border-radius:2px
      .content
</style>


