<template>
   <div> 
    <div class="text-right">     
      <button class="btn btn-primary">建立新產品</button>       
    </div>   

    <table class="table table-striped table-sm">
      <thead>
          <th width="10%">分類</th>
          <th >產品名稱</th>
          <th>原價</th>
          <th width="10%">售價</th>
          <th width="10%">是否啟用</th>
          <th width="10%">編輯</th>
      </thead>
      <tbody>
        <tr v-for="(item, key) in products" :key="key">
           <td>{{item.category}}</td>
           <td>{{item.title}}</td>
           <td class="text-right">
               {{item.oright_price}}
           </td>
           <td class="text-right">
               {{item.price}}
           </td>
           <td>
               <span v-if="item.is_enable" clas="text-success">啟用</span>
               <span v-else>未啟用</span>
           </td>
           <td>
               <button class="btn btn-outline-primary btn-sm">編輯</button>
           </td>
        </tr>
      </tbody> 
    </table> 
  </div>
</template>


<script>
export default {
    data() {
        return {
            products: [],
        };
    },
    methods: {
        getProducts(){
            const api=`${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/product`; //反引號  
            const vm=this;
            console.log(process.env.APIPATH,process.env.CUSTOMPATH);
            this.$http.get(api).then((response) => {
            console.log(response.data);
            vm.products=response.data.products;
            });
        },
    },
    created() {
        this.getProducts();
    }
};
</script>
