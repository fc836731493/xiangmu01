<template>
  <div class="index-wrap">
     <div class="index-left">
        <div class="index-left-block">
           <h2>全部产品</h2>
           <div v-for="(product,index) in productList">
              <h3>{{ product.category }}</h3>
              <ul>
                  <li v-for="item in product.list">
                      <a target="_blank" :href="item.url">{{ item.name }}</a> 
                      <span v-if="item.hot" class="hot-tag">HOT</span>                    
                  </li>
              </ul>
            <div v-if="index%2 ==0" class="hr"></div>
           </div>         
        </div > 
        <div class="index-left-block lastest-news">
          <h2>最新消息</h2>
             <ul  v-for="items in news">                
                 <li v-for="item in items.data">
                      <a target="_blank" :href="item.cover">{{ item.author }}</a>
                 </li>
             </ul>
        </div>
       </div> 
     <div class="index-right">
       <div class="swiper-size">
            <swiper :options="swiperOption"  >
                <swiper-slide>
                    <a target="_blank" href="http://www.taobao.com">
                    <img class="swiperimg" src="../assets/slideShow/j1.jpg">
                    </a>
                </swiper-slide>
                <swiper-slide>
                    <a target="_blank" href="http://www.taobao.com">
                    <img class="swiperimg" src="../assets/slideShow/j2.jpg">
                     </a>
                </swiper-slide>
                <swiper-slide>
                    <a target="_blank" href="http://www.taobao.com">
                    <img class="swiperimg" src="../assets/slideShow/j3.jpg">
                     </a>
                </swiper-slide>
                <swiper-slide>
                    <a target="_blank" href="http://www.taobao.com">
                    <img class="swiperimg" src="../assets/slideShow/j4.jpg">
                     </a>
                </swiper-slide>
                <div class="swiper-pagination"  slot="pagination"></div>
                <div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div>
         </swiper>
        </div>     
     </div>      
  
  </div>
</template>

<script>
export default {
   name:"layout",
   data(){
       return{
            swiperOption: {
                pagination: {
                        el: '.swiper-pagination',
                },
                loop:true,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }
              },
           news:[],
           productList:[
               {
                   category:"手机应用类",
                   list:[
                       {
                           name:"91助手",
                           url:"https://www.baidu.com/",
                           hot:false                                                                            
                       },
                        {
                           name:"豌豆荚",
                           url:"https://www.baidu.com/",
                           hot:true                          
                       },
                        {
                           name:"金山毒霸",
                           url:"https://www.baidu.com/",
                           hot:false                          
                       }
                   ]
                },
                {category: "开发工具",
                   list:[
                       {
                           name:"WenStorm",
                           url:"https://www.baidu.com/",
                           hot:false                           
                       },
                        {
                           name:"HBuiler",
                           url:"https://www.baidu.com/",
                           hot:false                          
                       },
                        {
                           name:"Sublime Text 3",
                           url:"https://www.baidu.com/",
                           hot:true                           
                       },
                       {
                           name:"Atom",
                           url:"https://www.baidu.com/",
                           hot:false                          
                       }
                   ]}                
           ]
       }
   },
   created(){
       this.$axios.get("https://www.apiopen.top/novelInfoApi?name=%E7%9B%97%E5%A2%93%E7%AC%94%E8%AE%B0",{
           params:{
               count:10,
               type:"top"
           }
       })
       .then(res => {
           console.log(res.data);
           this.news = res.data;
           console.log(this.news);
       })
       .catch(error => {
           console.log(error)
       })
   }
}
</script>

<style scoped>
.index-wrap {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
}
.index-left {
    float: left;
    width: 300px;
    text-align: left;
}
.index-right {
    float: left;
    width: 900px;
}
.index-left-block {
    margin: 15px;
    background: #fff;
    box-shadow:0 0 1px #ddd;
    height: 350px;
}
.index-left-block .hr {
    margin-bottom: 20px;
    height: 1px;
    width: 100%;
    background: #ddd;
}
.index-left-block h2 {
    background: #4fc08d;
    color:#fff;
    padding: 10px 15px;
    margin-bottom: 20px;
}
.index-left-block h3 {
    padding: 0 15px 5px 15px;
    font-weight: bold;
    color: #222;
}
.index-left-block ul {
    padding: 10px 15px;
}
.index-left-block li {
    padding: 5px;
}
.index-board-list {
    overflow: hidden;
}
.index-board-item {
    float: left;
    width: 400px;
    background: #fff;
    box-shadow: 0 0 1px #ddd;
    padding: 20px;
    margin-right: 20px;
    margin-bottom: 20px;
}
.index-board-item-inner {
    min-height: 125px;
    padding-left: 120px;
}
.index-board-car .index-board-item-inner {
    background: url(../assets/images/1.png) no-repeat;
}
.index-board-loud .index-board-item-inner {
    background: url(../assets/images/2.png) no-repeat;
}
.index-board-earth .index-board-item-inner {
    background: url(../assets/images/3.png) no-repeat;    
}
.index-board-hill .index-board-item-inner {
    background: url(../assets/images/4.png) no-repeat;    
}
.index-board-item h2 {
    font-size: 18px;
    font-weight: bold;
    color: #000;
    margin-bottom: 15px;
}
.line-last {
    margin-right: 0;
}
.index-board-button {
    margin-top: 20px;
}
.lastest-news {
    min-height: 350px;
}
.hot-tag {
    background: red;
    color: #fff;
}
.new-item {
    display: inline-block;
    width: 230px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.swiperimg {
    width:100%;
    height: 370px;
}
.swiper-size {
    margin-top: 15px;
    height: 400px;
}
</style>