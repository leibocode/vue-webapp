<template>
    <div class="cartcontrol">
        <transition>
            <div class="cart-decrease">
                <span class="inner icon-remove_circle_outline"></span>
            </div>
        </transition>
        <div class="cart-count" v-show="food.count>0">{{food.count}}</div>
        <div class="cart-add icon-add-circle" @click.stop ="add"></div>
    </div>
</template>

<script>
const EVENT_ADD ='add'

export default {
    name:'cart-control',
    props:{
        food:{
            type:Object
        }
    },
    methods:{
        add(event){
            if(!this.food.count){
               this.$set(this.food,'count',1)       
            }else {
               this.food.count ++
            }
             this.$emit(EVENT_ADD,event.target)
        },
        decrease(){
            
        }
    }
}
</script>

