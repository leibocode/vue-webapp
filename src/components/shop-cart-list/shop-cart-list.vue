<template>
    <transition name="fade">
        <cube-popup 
        type="shop-cart-list"
        :z-index=90
        :position="bottom"
        :@mask-click="maskClick"
        :mask-closable=true
        v-show="visible">
          <transition name="move"
          @after-leave="afterLeave">
             <div v-show="visible">
               <div class="list-header">
                 <h1 class="title">购物车</h1>
                 <span class="empty" @click="empty">清空</span>
               </div>
               <cube-scroll class="list-content" ref="listContent">
                 <ul>
                   
                 </ul>
               </cube-scroll>
             </div>
          </transition>
        </cube-popup>
    </transition>
</template>

<script>
import CartControl from 'components/cart-control/cart-control'

const EVENT_SHOW = 'show'
const EVENT_ADD = 'add'
const EVENT_LEAVE = 'leave'

export default {
  name:'shop-cart-list',
  props:{
    selectFoods:{
      type:Array,
      default(){
        return []
      }
    }
  },
  created(){

  },
  methods:{
    onAdd(target){
      this.$emit(EVENT_ADD,target)
    },
    afterLeave(){

    },
    maskClick(){

    },
    empty(){
      this.dialogcomp = this.$createDialog({
        type:'confirm',
        content:'清空购物车?',
        $events:{

        }
      })
    }
  }
}
</script>

