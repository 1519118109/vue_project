// 导包 导入vue 导入vuex
import Vue from 'vue'
import Vuex from 'vuex'


// 将vuex注入到vue的实例中
Vue.use(Vuex);

// 将定义好的vuex导出
export default new Vuex.Store({
    state:{
        nums: [5, 10]
    },
    mutations:{
        add_data(state, num) {
            state.nums.push(num)
        },
    },
    getters:{
        result:function (state) {
            let res = 0;
            for (let n of state.nums) {
                res += n;
            }
            return res;
        }
    }
})
