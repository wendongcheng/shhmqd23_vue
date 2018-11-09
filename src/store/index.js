import Vue from 'vue'
import Vuex from 'vuex'
import { addLocalGoods,getTotalCount,updateLocalGoods,deleteLocalGoods } from '../common/localStorage.js';

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        buyCount: 0
    },
    getters:{
        getBuyCount(state){
            // 调用计算总数来刷新购物车的数量
           return state.buyCount ===0 ? getTotalCount():state.buyCount
        }
    },

    mutations:{
       
        addGoods(state,goods){
            
           state.buyCount = addLocalGoods(goods)
        },

        updateGoods(state,goods){
           state.buyCount = updateLocalGoods(goods)
        },

        deleteGoods(state,goodsId){
           state.buyCount = deleteLocalGoods(goodsId)
        }
    }
})




export default store
