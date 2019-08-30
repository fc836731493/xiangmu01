import Vue from "vue"
import VueX from "vuex"

Vue.use(VueX)

export default new VueX.Store({
    state:{
       order:{

       } ,
       totalPrice:0
    },
    mutations:{
        updateOrder(state,data){ // data = {key:value}
             state.order[data.key] = data.value
        }
    },
    actions:{
        updateOrder(context,data){
            context.commit("updateOrder",data);
        }
    }
})