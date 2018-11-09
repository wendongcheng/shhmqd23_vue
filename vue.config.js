module.exports = {
    baseUrl:'./',
    productionSourceMap:false,
    lintOnSave:false,
    configureWebpack:{
        externals: {
            vue: 'Vue',
            axios:'axios',
            'vue-router':'VueRouter',
            vuex:'Vuex',
            moment:'moment',
            'vue-lazyload':'VueLazyload',
            'v-distpicker': 'VDistpicker'
        }
    }
}
