<template lang="pug">
Transition(
    name="itemShow"
    @click="deleteItem([dataShow.list,dataShow.id])"
    )
    .showing__item(
        v-if="dataShow.isCheck" 
        )
        
     
        .showing__item-react(
            v-for="(el,index) in dataShow.count"
            :key="index"
            :style="{'background': dataShow.color}"
            ) 
        
</template>

<script>
import { mapMutations } from 'vuex'
export default {
    name:"showing-item",
    props:{
        dataShow:{
            type:Object,
            default:{}
        }
    },
    methods:{
        ...mapMutations([
            "DELETE_ITEM"
        ]),
        deleteItem(str){
            return this.DELETE_ITEM(str)
        }
    }
   
}
</script>

<style lang="scss">
.itemShow{
    &-enter-active,&-leave-active{
        transition: opacity 0.5s ease;
    }
   
    &-enter-from,&-leave-to{
         opacity: 0;
    }
}
.showing__item{
    display: flex;
    flex-wrap: wrap;
    gap:1px;

    &-react{
    width: 16px;
    height: 16px;
    background: #883;
}}
</style>