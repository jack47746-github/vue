<template>
  <div id="app">
  <router-view/>
  </div>  
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  }, 
  // created(){                
  //     const api=`${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products`; //反引號  
  //     //api 伺服器路徑
  //     //所申請的 APIPath
  //     console.log(process.env.APIPATH,process.env.CUSTOMPATH);
  //     this.$http.get(api).then((response) => {
  //     console.log(response.data);
  //   });
  // },
};
</script>

<style lang="scss">
@import "./assets/all";
</style>
