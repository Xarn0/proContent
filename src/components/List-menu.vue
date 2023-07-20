<template lang="pug">
section.listMenu 
    .listMenu__header(@click="showTitle(title)") 
        span(:class="{'listMenu__header-arrow-active':!isshowmenu}").listMenu__header-arrow
        span(:class="{'listMenu__header-checkbox-active':isshowmenu}").listMenu__header-checkbox
        h2.listMenu-title  {{ title}}
    Transition(name="itemList")
        .listMenu__content(v-if="isshowmenu") 
            ListItem(
            
                :dataItemList="dataListElements"
                
                )
        
</template>

<script>
import ListItem from '@/components/List-item.vue';
import { mapActions, mapMutations } from 'vuex';
export default {
    name:"list-menu",
    components:{
        ListItem
    },
    data(){
        return{
            isshowmenu:true
        }
    },
    props:{
        title:{
            type:String,
            default:""
        },
        dataListElements:{
            type:Object,
            default:{}
        }
    },
    methods:{
       ...mapMutations(["SET_DECREMENT_ITEM"]) ,
       ...mapActions(["SET_ACTIONS_SHOW"]),
       showTitle(data){
            this.isshowmenu = !this.isshowmenu
            this.SET_DECREMENT_ITEM(data)
       }
    },
   
  
}
</script>

<style lang="scss">
.itemList{
    &-enter-active,&-leave-active{
        transition: opacity 0.5s ease;
    }
   
    &-enter-from,&-leave-to{
         opacity: 0;
    }
}

.listMenu{
    &__header{
        display: flex;
        align-items: center;
        gap: 10px;
        &-checkbox{
            width: 16px;
            display: block;
            height: 16px;
            border: 1px solid #000;
        }
        &-checkbox-active{
            position: relative;
            &::after{
                content: '';
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 8px;
                height: 8px;
                background: #000;
            }
        }
        &-arrow{
            background-image: url("@/assets/img/arrow.png");
            display: block;
            width: 20px;
            height: 20px;
            background-size: contain;
            &-active{
                transform: rotate(-90deg);
            }
        }
    }
    &__content{
        display: flex;
        flex-direction: column;
        gap: 15px;
        margin: 15px 0;
    }
}
</style>