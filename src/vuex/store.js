var store = {
    init: function (Vuex) {
        store.test = new Vuex.Store({
            state:{
                count:1
            },
            mutations:{
                test:function(state){
                    console.log(2);
                }
            }  
        })
    }
}
module.exports = store;