<template>
  <div id="app">
    <index/>
    <!-- <nav-menu/>
    <section>
      <router-view/> 
    </section> -->
  </div>
</template>

<script>
import Index from '@/page/index'
export default {
  name: 'App',
  components:{
    "index": Index
  }
}
</script>
<style>
html,body,#app{
  height: 100%;
}
</style>

