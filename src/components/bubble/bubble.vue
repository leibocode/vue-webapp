<template>
    <span class="bubble">
        {{ num }}
    </span>
</template>

<script>
export default {
    name:'bubble',
    props:{
        num:{
            type:Number
        }
    }
}
</script>

<style lang="stylus" scoped>
@import "~common/stylus/veriable";

.bubble
    display:inline-block
    padding:0 5px
    height:16px
    line-height:16px
    text-align:center
    border-radius:16px
    font-family:Hvlvetica
    font-weight:700
    font-size:$fontsize-smail-s
    color:$color-white
    background:linear-grayscale()
</style>
