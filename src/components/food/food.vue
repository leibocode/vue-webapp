<template>
    <transition name="move" @after-leave="afterLeave">
        <cube-scroll ref="scroll">
            <div class="images-header"></div>
            <div class="content"></div>
            <split v-show="food.info"></split>
            <div class="info" v-show="food.info">
                <h1 class="title">商品信息</h1>
                <p class="text">{{food.info}}</p>
            </div>
            <split></split>
            <div class="rating">
                <h1 class="title">商品评价</h1>
                <rating-select></rating-select>
            </div>
            <div class="rating-wrapper">
                <ul></ul>
                <div class="no-rating"></div>
            </div>
        </cube-scroll>
    </transition>
</template>

<script>
import moment from 'moment'

const EVENT_SHOW ='show'
const EVENT_ADD ='add'
const EVENT_LEAVE ='leave'

export default {
    name:'food',
    props:{
        food:{
            type:Object
        }
    },
    data(){
        return {
            desc:{
                all:'全部',
                positive:'推荐',
                negative:'吐槽'
            }
        }
    }
}
</script>

