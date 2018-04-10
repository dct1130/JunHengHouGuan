<template>
    <el-container>
        <el-header height="80px">Header</el-header>
        <el-container>
            <el-aside width="200px">
                <nav-menu></nav-menu>
            </el-aside>
            <el-main>
                <router-view/>
            </el-main>
        </el-container>
    </el-container>
</template>
<script>
import NavMenu from '@/components/NavMenu'
export default {
  components:{
      'nav-menu': NavMenu
  }
}
</script>
<style>
  .el-header{
    background-color: #545c64;
    border-bottom: 1px solid #555;
    box-shadow: 0 2px 5px 0 rgba(0,0,0,.3);
    color: white;
    text-align: center;
    line-height: 60px;
  }
  .el-container{
      height: 100%;
  }
  .el-aside {
     background-color: #545c64; 
     box-shadow: 2px 0 5px 0 rgba(0,0,0,.3);
  }
</style>

