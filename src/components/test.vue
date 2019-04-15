<template>
  <div class="hello">
    <input v-validate="'required|email'" name="email" type="text">
    <span>{{ errors.first('email') }}</span>

    <swipe class="my-swipe">
      <swipe-item class="slide1">123</swipe-item>
      <swipe-item class="slide2">456</swipe-item>
      <swipe-item class="slide3">789</swipe-item>
    </swipe>



    <div>
      <div class="navlist">
        <ul>
          <li class="navli"  v-for="(item,index) in navList" :class="{'activeT':nowIndex===index}" @click="tabClick(index)"><i>{{item.name}}</i>
          </li>
        </ul>
      </div>
      <div class="swiper-container swiper_con">
        <div class="swiper-wrapper">
          <!-- 第一个swiper -->
          <div class="swiper-slide" ref="viewBox">1111
          </div>
          <!-- 第二个swiper -->
          <div class="swiper-slide">2222
          </div>
        </div>
      </div>

  </div>
  </div>
</template>


<script>
  export default {
    name: "swiper",
    data() {
      return {
        navList:[
          {name:'热门答疑'},
          {name:'北清状元'}
        ],
        nowIndex:0,
      }
    },
    components:{
    },
    mounted() {
      var that=this
      that.mySwiper = new Swiper('.swiper-container',{
        initialSlide:0,
        autoplay:false,
        keyboardControl:true,
        autoHeight:true,
        observer:true,
        observeParents:true,
        onSlideChangeStart:function(){
          // console.log(that.mySwiper.activeIndex)
          that.nowIndex=that.mySwiper.activeIndex
        }
      });
      // this.getList();
    },
    methods: {
      tabClick(index){
        this.nowIndex = index
        this.mySwiper.slideTo(index,1000,false)
      },
    },
    created(id){

    }
  }

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /*@import 'vue-swipe/dist/vue-swipe.css';*/
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.my-swipe {
  height: 200px;
  color: #fff;
  font-size: 30px;
  text-align: center;
}

.slide1 {
  background-color: #0089dc;
  color: #fff;
  width: 50%;
}

.slide2 {
  background-color: #ffd705;
  color: #000;
  width: 50%;
}

.slide3 {
  background-color: #ff2d4b;
  color: #fff;
  width: 50%;
}


   .navlist{
     width:100%;
     height:40px;
     border-bottom:1px solid rgba(151,151,151,0.1);
     position:relative;
   }
  .navli{
    padding:10px 0px;
    text-align:center;
    float:left;
    margin:0 1.2rem;
  }
  .navli i{
    font-style: normal;
    font-size: 16px;
  }
  .activeT{
    color:#00ba6b;
    padding-bottom: .3rem;
    border-bottom: 2px solid #00ba6b;
  }
  .swiper_con{
    width:100%;
    margin-bottom:40px;
    position:relative;
  }
  .choosegrand{
    position:absolute;
    top:-3;
    right:0;
  }
  .show{
    display:block;
  }
  .none{
    display:none;
  }
</style>
