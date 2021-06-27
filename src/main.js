// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
//import 'bootstrap';

import App from './App';
import router from './router';

Vue.config.productionTip = false;
axios.defaults.withCredentials=true;
Vue.use(VueAxios, axios);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
})
//導航守衛
router.beforeEach((to, from, next)=>{

  if(to.meta.requiresAuth){
    const api=`${process.env.APIPATH}/api/user/check`; //反引號  
    axios.post(api).then((response) => {
    console.log(response.data);
    if(response.data.success){
      next();
    }else{
      next({
        path:'/login',
      })
    }
    });
  }else{
    next();
  }
});

