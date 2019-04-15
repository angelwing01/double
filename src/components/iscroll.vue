<template>
    <div>
      <div id="wrapper" ref='wrap'>
        <ul class="clear lines" >
          <!--<li v-for= '(item,index) in line'>-->
            <!--<div class="bg" :ll='index'>-->
              <!--<f2-line :name='item' :in='index' top='1' :tHeight='heightList[1]'></f2-line>-->
            <!--</div>-->
          <!--</li>-->
          <li> 1233</li>
          <li> 1233</li>
          <li> 1233</li>
          <li> 1233</li>
          <li> 1233</li>
          <li> 1233</li>
        </ul>
      </div>
    </div>
</template>

<script>
  import IScroll from 'iscroll';
    export default {
        data() {
            return {}
        },
        mounted() {
          this.$nextTick(()=>{
            var myScroll = new IScroll(this.$refs.wrap, { scrollX: true, freeScroll: true });
          },200)
        }
    }
</script>

<style scoped>
#wrapper{
  /*width: 200px;*/
  /*position: relative;*/
  /*z-index: 1;left: 0;*/
  /*overflow: hidden;*/
  /*padding-bottom: 5px;*/
  /*overflow-x: auto;*/
  /*position: relative;*/
  /*z-index: -99;*/

  overflow:hidden;

}
.lines{
  /*height: 100%;*/
  /*width: auto;*/
  /*width: 500px;*/
  /*white-space: nowrap;*/
  /*overflow-x: scroll;*/
  white-space :nowrap;
  /*word-break:break-all;*/
  /*word-wrap:break-word;*/
  margin: 0;
  /*position: relative;*/
  /*width: auto;*/
 float: left;
}
  .lines>li{
    /*float: left;*/
    width: 30px;
    display: inline-block;
    margin-right: 30px;
    /*word-break:break-all; word-wrap:break-word;*/
  }
</style>
