<template>
  <div id="app">
    <div class="t f1"><span style="width: 80px">{{number}}</span>:<span :class="zhishu.includes(item) ? 'red' : '' " v-for="item in items[number].red">{{item}}</span><span>/</span><span :class="zhishu.includes(item) ? 'red' : '' ">{{items[number].blue}}</span></div>
    <div class="t"><span></span>冷号: <span :class="hi(data5)" v-for="data5 in datas5">{{data5}}</span><span>----{{datas5.length}}个</span></div>
    <div class="t"><span></span>推号: <span :class="hi(data4)" v-for="data4 in datas4">{{data4}}</span> </div>
    <div class="t"><span></span>备号: <span :class="hi(data3)" v-for="data3 in datas3">{{data3}}</span> </div>
    <div class="t"><span></span>中号: <span :class="hi(data2)" v-for="data2 in datas2">{{data2}}</span> </div>
    <div class="t"><span></span>隔号: <span :class="hi(data1)" v-for="data1 in datas1">{{data1}}</span> </div>
    <div class="t"><span></span>复号: <span :class="hi(data0)" v-for="data0 in datas0">{{data0}}</span> </div>
    <div style="margin-top: 50px" class="six">
      <span :class="top(data)"  v-for="data in all" :style="data ? '': 'display:inline-block;width:4px;height:30px;background:#000'">{{data}}</span>
    </div>
    <div style="margin-top: 50px" class="six">
      <span :class="top(data)"  v-for="data in nine" :style="data ? '': 'display:inline-block;width:4px;height:30px;background:#000'">{{data}}</span>
    </div>
    <div style="height: 180px;margin-top: 50px">
      <table style="float: left">
        <tr>
          <td :class="back(1)">1</td>
          <td :class="back(2)">2</td>
          <td :class="back(3)">3</td>
          <td :class="back(4)">4</td>
          <td :class="back(5)">5</td>
          <td :class="back(6)">6</td>
        </tr>
        <tr>
          <td :class="back(7)">7</td>
          <td :class="back(8)">8</td>
          <td :class="back(9)">9</td>
          <td :class="back(10)">10</td>
          <td :class="back(11)">11</td>
          <td :class="back(12)">12</td>
        </tr>
        <tr>
          <td :class="back(13)">13</td>
          <td :class="back(14)">14</td>
          <td :class="back(15)">15</td>
          <td :class="back(16)">16</td>
          <td :class="back(17)">17</td>
          <td :class="back(18)">18</td>
        </tr>
        <tr>
          <td :class="back(19)">19</td>
          <td :class="back(20)">20</td>
          <td :class="back(21)">21</td>
          <td :class="back(22)">22</td>
          <td :class="back(23)">23</td>
          <td :class="back(24)">24</td>
        </tr>
        <tr>
          <td :class="back(25)">25</td>
          <td :class="back(26)">26</td>
          <td :class="back(27)">27</td>
          <td :class="back(28)">28</td>
          <td :class="back(29)">29</td>
          <td :class="back(30)">30</td>
        </tr>
        <tr>
          <td :class="back(31)">31</td>
          <td :class="back(32)">32</td>
          <td :class="back(33)">33</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>

      </table>
      <table style="float:left; margin-left: 200px">
        <tr>
          <td :class="back(31)">31</td>
          <td :class="back(32)">32</td>
          <td :class="back(33)">33</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td :class="back(30)">30</td>
          <td :class="back(13)">13</td>
          <td :class="back(14)">14</td>
          <td :class="back(15)">15</td>
          <td :class="back(16)">16</td>
          <td :class="back(17)">17</td>
        </tr>
        <tr>
          <td :class="back(29)">29</td>
          <td :class="back(12)">12</td>
          <td :class="back(3)">3</td>
          <td :class="back(4)">4</td>
          <td :class="back(5)">5</td>
          <td :class="back(18)">18</td>
        </tr>
        <tr>
          <td :class="back(28)">28</td>
          <td :class="back(11)">11</td>
          <td :class="back(2)">2</td>
          <td :class="back(1)">1</td>
          <td :class="back(6)">6</td>
          <td :class="back(19)">19</td>
        </tr>
        <tr>
          <td :class="back(27)">27</td>
          <td :class="back(10)">10</td>
          <td :class="back(9)">9</td>
          <td :class="back(8)">8</td>
          <td :class="back(7)">7</td>
          <td :class="back(20)">20</td>
        </tr>
        <tr>
          <td :class="back(26)">26</td>
          <td :class="back(25)">25</td>
          <td :class="back(24)">24</td>
          <td :class="back(23)">23</td>
          <td :class="back(22)">22</td>
          <td :class="back(21)">21</td>
        </tr>

      </table>
    </div>

    <div style="margin-top: 50px">
      <div class="t">非倍数<span v-for="item in items[number].red" v-if="not.includes(item)" :class="zhishu.includes(item) ? 'red' : ''">{{item}}</span></div>
      <div class="t">三倍数<span v-for="item in items[number].red" v-if="three.includes(item)" :class="zhishu.includes(item) ? 'red' : ''">{{item}}</span></div>
      <div class="t">二倍数<span v-for="item in items[number].red" v-if="two.includes(item)" :class="zhishu.includes(item) ? 'red' : ''">{{item}}</span></div>
      <div class="t">五倍数<span v-for="item in items[number].red" v-if="five.includes(item)" :class="zhishu.includes(item) ? 'red' : ''">{{item}}</span></div>
    </div>
    <div style="margin-top: 20px">
      <div class="t">0字头<span v-for="item in items[number].red" v-if="head0.includes(item)" :class="zhishu.includes(item) ? 'red' : ''">{{item}}</span></div>
      <div class="t">1字头<span v-for="item in items[number].red" v-if="head1.includes(item)" :class="zhishu.includes(item) ? 'red' : ''">{{item}}</span></div>
      <div class="t">2字头<span v-for="item in items[number].red" v-if="head2.includes(item)" :class="zhishu.includes(item) ? 'red' : ''">{{item}}</span></div>
      <div class="t">3字头<span v-for="item in items[number].red" v-if="head3.includes(item)" :class="zhishu.includes(item) ? 'red' : ''">{{item}}</span></div>
    </div>
    <div>
      <div class="t">五期均值 <span :class="zhishu.includes(data6) ? 'red' : '' " v-for="data6 in datas6">{{data6}}</span></div>
    </div>
    <div style="margin-top: 50px">
      <button @click="prev">上一期</button>
      <button @click="next">下一期</button>
    </div>




    <!--<router-view/>-->
  </div>
</template>

<script>
  export default {
    name: 'App',
    data(){

      return{
        items:{
          2019033:{red:[9,15,19,21,23,29],blue:15},
          2019032:{red:[4,8,9,13,28,33],blue:4},
          2019031:{red:[3,13,15,18,21,33],blue:16},
          2019030:{red:[4,5,7,10,12,22],blue:16},
          2019029:{red:[8,11,17,23,32,33],blue:10},
          2019028:{red:[4,19,22,26,29,30],blue:11},
          2019027:{red:[2,6,8,10,11,17],blue:13},
          2019026:{red:[3,13,15,19,20,27],blue:14},
          2019025:{red:[15,16,21,27,30,33],blue:4},
          2019024:{red:[1,8,23,25,28,29],blue:10},
          2019023:{red:[1,10,14,15,18,31],blue:13},
          2019022:{red:[3,7,11,21,30,33],blue:7},
          2019021:{red:[2,5,7,8,20,27],blue:4},
          2019020:{red:[2,12,13,23,27,28],blue:12},
          2019019:{red:[3,11,17,18,24,25],blue:6},
          2019018:{red:[4,11,18,19,26,32],blue:4},
          2019017:{red:[4,5,24,28,30,33],blue:9},
          2019016:{red:[5,7,9,11,19,25],blue:5},
          2019015:{red:[11,15,16,20,24,31],blue:4},
          2019014:{red:[1,2,3,14,19,25],blue:3},
          2019013:{red:[5,7,14,16,18,21],blue:1},
          2019012:{red:[7,10,21,23,31,33],blue:14},
          2019011:{red:[10,13,19,21,24,30],blue:7},
          2019010:{red:[2,4,5,8,11,30],blue:2},
          2019009:{red:[1,7,10,22,31,32],blue:15},
          2019008:{red:[2,6,9,13,28,32],blue:12},
          2019007:{red:[6,10,14,15,19,23],blue:15},
          2019006:{red:[1,5,10,19,26,28],blue:12},
          2019005:{red:[21,22,26,28,31,32],blue:12},
          2019004:{red:[8,12,16,19,26,32],blue:12},
          2019003:{red:[13,17,20,21,22,27],blue:12},
          2019002:{red:[4,5,6,8,9,18],blue:12},
          2019001:{red:[6,10,13,15,32,33],blue:12}
        },
        zhishu:[1,2,3,5,7,11,13,17,19,23,29,31],
        all:[1,2,3,4,5,6,'',7,8,9,10,11,'',12,13,14,15,16,17,'',18,19,20,21,22,'',23,24,25,26,27,28,'',29,30,31,32,33],
        nine:[1,4,7,10,'',13,16,19,22,'',25,28,31,'',2,5,8,11,'',14,17,20,'',23,26,29,32,'',3,6,9,'',12,15,18,21,'',24,27,30,33],
        number:2019032,
        max:2019033,
        min:2019005,
        not:[1,7,11,13,17,19,23,29,31],
        three:[3,6,9,12,15,18,21,24,27,30,33],
        two:[2,4,6,8,14,16,22,26,28,32],
        five:[5,10,20,25],
        head0:[1,2,3,4,5,6,7,8,9],
        head1:[10,11,12,13,14,15,16,17,18,19],
        head2:[20,21,22,23,24,25,26,27,28,29],
        head3:[30,31,32,33]
      }
    },
    methods:{
      prev(){
        console.log(this.number)
        if(this.number == this.min){
          return
        }
        this.number--;
      },
      next(){
        if(this.number == this.max){
          return
        }
        this.number++;
      },
      back(key){
        let back='';
        if(!this.items[this.number+1]){
          if(this.items[this.number].red.includes(key)){
            back = 'f5e'
          }
        }else {
          if(this.items[this.number].red.includes(key) && this.items[this.number+1].red.includes(key)){
            back ='green'
          }else if(this.items[this.number].red.includes(key)){
            back = 'f5e'
          }else if(this.items[this.number+1].red.includes(key)){
            back = 'yellow'
          }else{
            back =''
          }
        }

        return back
      },
      hi(key){
        if(this.items[this.number+1]){
          if(this.items[this.number+1].red.includes(key) && this.zhishu.includes(key)){
            return 'red next'
          }else if(this.items[this.number+1].red.includes(key)){
            return 'next'
          }else if(this.zhishu.includes(key)){
            return 'red'
          }else {
            return ''
          }
        }else {
          return this.zhishu.includes(key) ? 'red' : ''
        }
      },
      top(data){
        if(!this.items[this.number+1]){
          if(this.zhishu.includes(data) && this.items[this.number].red.includes(data)){
            return 'red top'
          }else if(this.zhishu.includes(data)){
            return 'red'
          }else if(this.items[this.number].red.includes(data)){
            return 'top'
          }else {
            return ''
          }
        }else {
          if(this.zhishu.includes(data) && this.items[this.number].red.includes(data) && this.items[this.number+1].red.includes(data)){
            return 'red top-green'
          }else if(this.zhishu.includes(data) && this.items[this.number].red.includes(data) ) {
            return 'red top'
          }else if(this.items[this.number].red.includes(data) && this.items[this.number+1].red.includes(data)){
            return 'top-green'
          }else if(this.zhishu.includes(data) && this.items[this.number+1].red.includes(data)){
            return 'red top-yellow'
          }else if(this.zhishu.includes(data) ){
            return 'red'
          }else if(this.items[this.number].red.includes(data)  ){
            return 'top'
          }else if(this.items[this.number+1].red.includes(data)){
            return 'top-yellow'
          }else {
            return ''
          }
        }


      }
    },
    computed:{
      datas0(){
        let data=this.items[this.number].red
        return data
      },
      datas1(){
        let data0=this.items[this.number].red
        let data1=this.items[this.number-1].red
        let a = []
        let data=a.concat(data1)
        for (let i=0;i<6;i++) {
          for(let j=0;j<6;j++){
            if(data[i] == data0[j]){
              data[i]=''
            }
          }
        }
        return data
      },
      datas2(){
        let data0=this.items[this.number].red
        let data1=this.items[this.number-1].red
        let data2=this.items[this.number-2].red
        let a = []
        let data=a.concat(data2)
        data.concat(data2)
        for (let i=0;i<6;i++) {
          for(let j=0;j<6;j++){
            if(data[i] == data0[j]){
              data[i]=''
            }
          }
        }
        for (let i=0;i<6;i++) {
          for(let j=0;j<6;j++){
            if(data[i] == data1[j]){
              data[i]=''
            }
          }
        }
        return data
      },
      datas3(){
        let data0=this.items[this.number].red
        let data1=this.items[this.number-1].red
        let data2=this.items[this.number-2].red
        let data3=this.items[this.number-3].red
        let a = []
        let data=a.concat(data3)
        for (let i=0;i<6;i++) {
          for(let j=0;j<6;j++){
            if(data[i] == data0[j]){
              data[i]=''
            }
          }
        }
        for (let i=0;i<6;i++) {
          for(let j=0;j<6;j++){
            if(data[i] == data1[j]){
              data[i]=''
            }
          }
        }

        for (let i=0;i<6;i++) {
          for(let j=0;j<6;j++){
            if(data[i] == data2[j]){
              data[i]=''
            }
          }
        }
        return data
      },
      datas4(){
        let data0=this.items[this.number].red
        let data1=this.items[this.number-1].red
        let data2=this.items[this.number-2].red
        let data3=this.items[this.number-3].red
        let data4=this.items[this.number-4].red
        let a = []
        let data=a.concat(data4)
        for (let i=0;i<6;i++) {
          for(let j=0;j<6;j++){
            if(data[i] == data0[j]){
              data[i]=''
            }
          }
        }
        for (let i=0;i<6;i++) {
          for(let j=0;j<6;j++){
            if(data[i] == data1[j]){
              data[i]=''
            }
          }
        }
        for (let i=0;i<6;i++) {
          for(let j=0;j<6;j++){
            if(data[i] == data2[j]){
              data[i]=''
            }
          }
        }
        for (let i=0;i<6;i++) {
          for(let j=0;j<6;j++){
            if(data[i] == data3[j]){
              data[i]=''
            }
          }
        }
        return data
      },
      datas5(){
        let data=[]
        for(let i=1;i<34;i++){
          if(this.datas0.includes(i) || this.datas1.includes(i) || this.datas2.includes(i) || this.datas3.includes(i) || this.datas4.includes(i) ){

          }else {
            data.push(i)
          }

        }
        return data
      },
      datas6(){
        let data =[]

        for(let i=0;i<6;i++){
          let toatal =this.items[this.number].red[i]+this.items[this.number-1].red[i]+this.items[this.number-2].red[i]+this.items[this.number-3].red[i]+this.items[this.number-4].red[i]
          data.push(Math.round(toatal/5))
        }
        console.log(data)
        return data

      }


    }

  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /*text-align: center;*/
    color: #2c3e50;
    /*margin-top: 60px;*/
    /*width: 500px;*/
    /*margin-left:300px;*/
    max-width: 960px;
    margin: 0 auto;
  }
  .f1{
    margin-bottom: 50px;
  }
  .t>span{
    /*margin: 0 20px;*/
    display: inline-block;
    width: 60px;
    text-align: center;
  }
  .red{
    color: red;
  }
  .top{
    border-top: 10px solid #f5e;
  }
  .top-green{
    border-top: 10px solid green;
  }
  .top-yellow{
    border-top: 10px solid yellow;
  }
  .a{
    width: 180px;
  }
  .a>span{
    display: inline-block;
    width: 30px;
    height: 30px;
    border: 1px solid #000;
    border-right: none;
  }
  .a>span:nth-child(6n){
    border-right: 1px solid #000;
  }
  table{
    border-collapse:collapse;
  }
  table td{
    border: 1px solid #000;
    width: 30px;
    height: 30px;
    text-align: center;
  }
  .f5e{
    background: #f5e;
  }
  .yellow{
    background: yellow;
  }
  .green{
    background: green;
  }
  .six>span{
    margin: 0 5px;
  }
  .next{
    background: #f5e;
  }

</style>

