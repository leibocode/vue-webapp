<template>
    <div class="tab">
        <cube-tab-bar :useTransition=false
        :showSlider=true
        :v-model="selectedLabel"
        :data="tabs"
        ref="tabbar"
        class="border-bottom-1px">
        </cube-tab-bar>
        <div class="slider-wrapper">
            <cube-slider :loop=false
            :auto-play=false
            :show-dots=false
            :initial-index="index"
            ref="slider"
            :options="slideOptions"
            @scroll="onScroll"
            @change="onChange">
               <cube-slider-item v-for="(tab,index) in tabs" :key="index">
                   <component ref="component" :is="tab.component" :data="tab.data"></component>
               </cube-slider-item>
            </cube-slider>
        </div>
    </div>
</template>

<script>
export default {
    name:'tab',
    props:{
        tabs:{
            type:Array,
            default(){
                return []
            }
        },
        initialIndex:{
            type:Number,
            default:0
        }
    },
    data(){
        return {
            index:this.initialIndex, //当前选中的tab-item
            slideOptions:{
                listenScroll:true,
                probeType:3,
                directionLockThreshold:0
            }
        }
    },
    computed:{

    },
    mounted(){
        this.onChange(this.index)
    },
    methods:{

    }
}
</script>

<style lang="stylus" scoped>
   @import "~common/stylus/veriable";
       .tab
           display:flex;
           flex-direction:column;
           height:100%;
           >>> .cube-tab
            padding:10px 0
           .slide-wrapper
            flex:1,
            overflow:hidden
</style>


