<template>
    <div class="star" :class="starType">
        <span v-for="(itemClass,index) in itemClsses" 
        :class="itemClass" :key="index"></span>
    </div>
</template>

<script>
const LENGTH =5
const CLS_ON ='on'
const CLS_HALF ='half'
const CLS_OFF ='off'

export default {
    props:{
        size:{
            type:Number
        },
        score:{
            type:Number
        }
    },
    computed:{
        starType(){
            return 'star-'+this.size
        }
    },
    itemClsses(){
        let result =[]
        
    }
}
</script>

<style lang="stylus" scoped>
   @import "~common/stylus/mixin.styl";
   
   .star
     display:flex
     align-items:center
     justify-content:center
     .star-item
       background-repeat:no-repeat
       
</style>

