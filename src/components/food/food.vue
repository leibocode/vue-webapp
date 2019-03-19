<template>
    <transition name="move" @after-leave="afterLeave">
        <div class="food" v-show="visible">

        </div>
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

