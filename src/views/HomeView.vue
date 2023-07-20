<template lang="pug">
main.main 
  
  .ListItem 
      //*  лист  *// 
     
      ListMenu(v-for="(element,key,index) in GET_OBJ"
        :key="index"   
        :title="titleMenu(index)"
        :dataListElements="element"
      )
      
     
  .Result
    
      .Result__header 
       
      .Result__container
        showingMain(
          v-for="(element,key,index) in GET_OBJ"
          :key="index"
          :dataItem="element"
          
          )
          
</template>
  
  <script>
  import ListMenu from '@/components/List-menu.vue';
  import ListItem from '@/components/List-item.vue';
  import showingMain from '@/components/right/showing-main.vue' 
  import { mapGetters } from 'vuex';

  
  export default {
    name: 'HelloWorld',
    props: {
    },
    components:{
      ListMenu,
      ListItem,
      showingMain
    },
    data(){
      return{
        countListLength:0,
        dataItem:[],
        title1:"list1",
        title2:"list2",
        convert: {}
      }
    },
    computed:{
      ...mapGetters([
        "GET_OBJ"
      ])
     
    },
    methods:{
      titleMenu(index){
        return `list${index+1}`
      },
      getElemets(data){
        
        return this.dataItem.push(data)
      }
   
    
    },
    mounted(){
     
    }
     
    
    
  }
  </script>
  

  <style scoped lang="scss">
 
  .ListItem{
    border: 1px solid #000;
    padding: 15px;
    margin: 15px;
    width: 500px;
    
  }
  .Result {
    border: 1px solid #000;
    padding: 15px;
    margin: 15px;
    width: 500px;

    &__container{
      display: flex;
      flex-direction: column;
      gap: 15px;
    }
  }
  .main {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: start;
  }
  </style>