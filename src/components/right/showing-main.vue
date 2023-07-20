<template lang="pug">
section.showing
    .showing__header 
        h2 {{  dataItem.item1.list }}
        button(@click="sort()") {{ buttonText }}
    .showing__content(v-if="isSort") 
        showingItem(
            v-for="(el,key,index) in dataItem"
            :key="index"
            :dataShow="el"
        )
    .showing__unSort(
        v-if="!isSort"
)       
        p(
            v-for="item in sortItem(sorts)"
            v-html="item") 

</template>

<script>
import showingItem from '@/components/right/showing-item.vue';
import { mapGetters } from 'vuex';
export default {
    name:"showing-main",
    props:{
        dataItem:{
            type:Object,
            default:{} 
            }
        },
    components:{
        showingItem
    },
    data(){
        return{
            color:"#934",
            buttonText:"Перемешать",
            isSort:true,
           
        }
    } ,
    methods:{
        ...mapGetters(["GET_OBJ"]),
        sort(){
            this.isSort = !this.isSort
            if( this.isSort){
                this.buttonText = "Перемешать"

            }else{
                this.buttonText = "Сортировать";
                this.sortts(this.GET_OBJ()[this.dataItem.item1.list])
            }
        },
        sortts(array){
            this.sorts = []
            for(let item in array){
                if(array[item].isCheck){
                    for(let i = 0; i < array[item].count; i++){
                        let div = `<div style="background:${array[item].color}; width:16px;height:16px"></div>`
                        this.sorts.push(div)
                        
                    }
                }
                 
              
            }
         return this.sorts      
             
            
        },
        sortItem(array){
            return array.sort(function() { return Math.random() - 0.5 })
        }

    }
}
   

</script>

<style lang="scss">
.flex{
    display: flex;
    gap: 3px;
    flex-wrap: wrap;
}
.showing{
  border: 1px solid #000;
  padding: 8px;
  &__header{
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
    button{
        border-radius: 10px;
        border: none;
        background: #3089db;
        color: #fff;
        font-weight: 700;
        font-size: 16px;
        padding: 10px;
    }
  }
  &__unSort{
    display: flex;
    gap: 4px;
   
    flex-wrap: wrap;
  }
  &__content {
    display: flex;
    gap:4px;
    flex-direction: column;
    &-line{
        display: flex;
        gap: 5px;
        span{
            font-size: 0;
            width: 16px;
            height: 16px;
           

        }
    }
  }

}
</style>