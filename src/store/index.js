import { createStore } from 'vuex'

export default createStore({
  state: {
    obj:{
      list1:{
        item1:{
          id:1,
          list:"list1",
          isCheck:true,
          count:5,
          color:"#293999"
        },
        item2:{
          id:2,
          list:"list1",
          isCheck:true,
          count:3,
          color:'#873645'
        }
        ,
        item3:{
          id:3,
          list:"list1",
          isCheck:true,
          count:10,
          color:'#87f645'
        }
        ,
        item4:{
          id:4,
          list:"list1",
          isCheck:true,
          count:1,
          color:'#873ff5'
        }
      },
      list2:{
        item1:{
          id:1,
          list:"list2",
          isCheck:true,
          count:10,
          color:'#663645'
        },
        item2:{
          id:2,
          list:"list2",
          isCheck:true,
          count:10,
          color:'#f94345'
        },
        item3:{
          id:3,
          list:"list2",
          isCheck:true,
          count:10,
          color:'#fcc645'
        },
        item4:{
          id:4,
          list:"list2",
          isCheck:true,
          count:10,
          color:'#ff3445'
        },
        item5:{
          id:5,
          list:"list2",
          isCheck:true,
          count:10,
          color:'#fcc645'
        }

      },
      list3:{
        item1:{
          id:1,
          list:"list3",
          isCheck:true,
          count:5,
          color:"#238999"
        },
        item2:{
          id:2,
          list:"list3",
          isCheck:true,
          count:3,
          color:'#323645'
        }
        ,
        item3:{
          id:3,
          list:"list3",
          isCheck:true,
          count:10,
          color:'#87ff45'
        }
        ,
        item4:{
          id:4,
          list:"list3",
          isCheck:true,
          count:1,
          color:'#ff3ff5'
        }
      },
      list4:{
        item1:{
          id:1,
          list:"list4",
          isCheck:true,
          count:5,
          color:"#293ff9"
        },
        item2:{
          id:2,
          list:"list4",
          isCheck:true,
          count:3,
          color:'#c73c45'
        }
        ,
        item3:{
          id:3,
          list:"list4",
          isCheck:true,
          count:10,
          color:'#c70fc0'
        }
        ,
        item4:{
          id:4,
          list:"list4",
          isCheck:true,
          count:1,
          color:'#800ff5'
        }
      },
      list5:{
        item1:{
          id:1,
          list:"list5",
          isCheck:true,
          count:5,
          color:"#292399"
        },
        item2:{
          id:2,
          list:"list5",
          isCheck:true,
          count:3,
          color:'#973f45'
        }
        ,
        item3:{
          id:3,
          list:"list5",
          isCheck:true,
          count:10,
          color:'#8ff645'
        }
        ,
        item4:{
          id:4,
          list:"list5",
          isCheck:true,
          count:1,
          color:'#800ff5'
        }
      },
    }
  },
  getters: {
    GET_OBJ(state){
      return state.obj
    }
  },
  mutations: {
    SET_DECREMENT_ITEM(state,data){
      let countSelected = 0;
      let lengthElement = 0;
      let isSelected = false
      for( let el in state.obj[data] ){
        if(state.obj[data][el].isCheck){
          isSelected = true;
          countSelected++
        }
        if(state.obj[data][el].isCheck){
          countSelected++
        }
        if(!countSelected){
          
        }
       
        lengthElement++;
      } 

      for( let el1 in state.obj[data] ){
       if(!isSelected){
          state.obj[data][el1].isCheck = true
        }
        if(isSelected){
          state.obj[data][el1].isCheck = false
        }
      }
    
    },
    DELETE_ITEM(state,str){
     var objCOnvert = state.obj[str[0]]
     for(let item in objCOnvert ){
      
       if(objCOnvert[item].id == str[1]){
          return  objCOnvert[item].count--
        }
     }
       
     
     
     
    }
  },
  actions: {
    SET_ACTIONS_SHOW({commit},data){
      commit("SET_DECREMENT_ITEM",data)
    }
  },
  modules: {
  }
})
