<template>
    <div id="app" @touchmove.prevent>
        <v-header></v-header>
    </div>
</template>

<script>
import VHeader from 'components/v-hreader/v-hreader'
export default {
    data(){
        return {}
    },
    computed:{
        
    },
    components:{
        VHeader
    }
}
</script>

<style lang="stylus" scoped>
#app
 .tab-wrapper
   position:fixed
   top:136px
   left:0
   right:0
   bottom:0
</style>