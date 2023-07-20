<template lang="pug">
.item(
    v-for="(el,key,index) in dataItemList "
    
    ) 
  
    .item__checkbox 
        input(
            type="checkbox",
            v-model="el.isCheck")
        span {{ "item" +( index+1)}}
    .item__elements 
        input(
            type="number" ,
            min="0"
            v-model="el.count",
            
            ).item__elements-count 
        input(
            type="color"
            v-model="el.color"
            ).item__elements-color
</template>

<script>


export default {
    name:"list-item",
    props:{
        dataItemList:{
            type:Object,
            default:{}
        }
       
    },
    data(){
        return{
            isselected:true,
        }
    },
   

}
</script>

<style lang="scss">
input[type="color"] {
  padding: 0;
}

input[type="color" i]::-webkit-color-swatch-wrapper {
  padding: 0;
}
.item{
    
   
        width: 300px;
        
        display: flex;
        align-items: center;
        margin-left: 30px;
        justify-content: space-between;
    
    
    
    &__elements{
        display: flex;
        gap: 10px;
        justify-content: end;
        &-count{
            width: 36px;
            height: 16px;
            border: none;
            outline: none;
            text-align: right;
            &::-webkit-outer-spin-button,
            &::-webkit-inner-spin-button {
                -webkit-appearance: none;
}
        }
        input[type=number] {
        -moz-appearance:textfield;
        }
        &-color{
            width: 16px;
            // display: block;
            height: 16px;
            border: none;
            outline: none;
            box-shadow: none;
            padding: 0;
            appearance:none;
          
            
       
}
    }
    &__checkbox{
        display: flex;
        gap: 10px;

    }
   

}
</style>