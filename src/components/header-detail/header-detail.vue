<template>
   <transition name="fade">
       <div v-show="visible" class="header-detail"
       @touchmove.stop.prevent>
          <div></div>
          <div class="detail-close" @click="hide">
              <i class="icon-close"></i>
          </div>
       </div>
   </transition>
</template>

<script>
import popupMixin from 'common'
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

</style>
