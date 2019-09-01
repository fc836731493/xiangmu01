<template>
  <div>
     car{{ getOrder }}
  </div>
</template>

<script>
export default {
   name:"car",
   data(){
       return{

       }
   },
   computed:{
     
      getOrder(){
         return this.$store.getters.getOrder;
      }
   }
}
</script>

<style scoped>

</style>