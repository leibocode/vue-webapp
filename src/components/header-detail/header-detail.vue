<template>
   <transition name="fade">
       <div v-show="visible" class="header-detail"
       @touchmove.stop.prevent>
          <div class="detail-wrapper clear-fix">
              <div class="detail-main">
                  <h1 class="nmae">{{seller.name}}</h1>
                  <div class="star-wrapper">
                      <star :size="48" :score="seller.score"></star>
                  </div>
                  <div class="title">
                      <div class="line"></div>
                      <div class="text">优惠信息</div>
                  </div>
                  <ul>
                      
                  </ul>
                  <div class="title">
                      <div class="line"></div>
                      <div class="text">商家公告</div>
                      <div class="line"></div>
                  </div>
                  <div class="bulletin">
                      <p class="content">{{seller.bulletin}}</p>
                  </div>
              </div>
          </div>
          <div class="detail-close" @click="hide">
              <i class="icon-close"></i>
          </div>
       </div>
   </transition>
</template>

<script>
import popupMixin from 'common'
import Star from 'components/star/star'

export default {
    name:'header-detail',
    mixins:[],
    props:{
        seller:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    components:{
        
    }
}
</script>

<style lang="stylus" scoped>
 .header-detail
   position:fixed
   z-index:100
   top:0
   left:0
   width:100%
   height:100%
   overflow:auto

</style>
