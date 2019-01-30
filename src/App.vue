<template>
  <div id="app">
    <div class="t f1"><span style="width: 80px">{{number}}</span>:<span :class="zhishu.includes(item) ? 'red' : '' " v-for="item in items[number].red">{{item}}</span><span>/</span><span :class="zhishu.includes(item) ? 'red' : '' ">{{items[number].blue}}</span></div>
    <div class="t"><span></span>冷号: <span :class="zhishu.includes(data5) ? 'red' : '' " v-for="data5 in datas5">{{data5}}</span><span>----{{datas5.length}}个</span></div>
    <div class="t"><span></span>推号: <span :class="zhishu.includes(data4) ? 'red' : '' " v-for="data4 in datas4">{{data4}}</span> </div>
    <div class="t"><span></span>备号: <span :class="zhishu.includes(data3) ? 'red' : '' " v-for="data3 in datas3">{{data3}}</span> </div>
    <div class="t"><span></span>中号: <span :class="zhishu.includes(data2) ? 'red' : '' " v-for="data2 in datas2">{{data2}}</span> </div>
    <div class="t"><span></span>隔号: <span :class="zhishu.includes(data1) ? 'red' : '' " v-for="data1 in datas1">{{data1}}</span> </div>
    <div class="t"><span></span>复号: <span :class="zhishu.includes(data0) ? 'red' : '' " v-for="data0 in datas0">{{data0}}</span> </div>
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
      number:2019013,
      max:2019013,
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
  margin-left:400px;
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
</style>
