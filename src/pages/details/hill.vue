<template>
  <div>
      hill:{{ getTotalPrice }}
  </div>
</template>

<script>
export default {
   name:"hill",
   data(){
       return{

       }
   },
   computed:{
     
      getTotalPrice(){
         return this.$store.getters.getTotalPrice;
      }
   },
   created(){
      this.$http.get("https://www.apiopen.top/journalismApi")
      .then(res => {
          console.log(res.body.data);
      })
      .catch(error => {
         console.log(error);
      })
   }
}
</script>

<style scoped>

</style>