<template>
    <div>

    </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
       mounted() {

         console.log(0.1+0.2 == 0.3)
         console.log(Math.abs(0.1+0.2-0.3)<=Number.EPSILON)

         var o = new Object

         o[Symbol.iterator] =function () {
           var v = 0
           return {
             next:function () {
               return {
                 value:v++,
                 done:v > 10
               }
             }
           }
         }

         for (var v of o) {
           console.log(v)
         }

         var myIterable = {}
         myIterable[Symbol.iterator] = function* () {
           yield 1;
           yield 2;
           yield 3;
           yield 5;
           yield 666;
         };
         console.log([...myIterable])
         console.log(Object.assign([],myIterable))

       }
    }
</script>

<style scoped>

</style>
