import Vue from 'vue';
import VueRouter from 'vue-router';
//import HelloWorld from '@/components/HelloWorld';
import Dashboard from '@/components/Dashboard';
import Login from '@/components/pages/Login';
import Products from '@/components/pages/Products';

//官方元件


//自訂的分頁

Vue.use(VueRouter);

export default new VueRouter({
   routes: [
    {   //預防輸入不當網址,全都倒回Login頁面
        path:'*',        
        redirect:'Login',
    },
    // {
    //     name:'HelloWorld',        //元件呈現的名稱
    //     path:'/',        //對應的虛尼路徑
    //     component:HelloWorld,   //對應的原件
    //     meta:{ requiresAuth: true },
    // },
    {        
        path:'/login',        //對應的虛尼路徑
        name:'Login',        //元件呈現的名稱
        component:Login,
    },
    {        
        path:'/admin',        //對應的虛尼路徑
        name:'Dashboard',     //元件呈現的名稱
        component:Dashboard,        
        children:[
            {                   
            path:'products',         //對應的虛尼路徑
            name:'Products',         //元件呈現的名稱
            component:Products,
            meta:{ requiresAuth: true },  
            },            
        ],
    },    
   ],
});
