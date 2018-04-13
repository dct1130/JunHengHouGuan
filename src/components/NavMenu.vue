<template>
    <el-row>
        <el-col>
            <el-menu :default-active="$route.path" background-color="#545c64" text-color="white" active-text-color="#f7f756" router>
                <el-menu-item index="/ad">
                    <i class="el-icon-picture"></i>
                    <span>首页广告</span>
                </el-menu-item>
                <el-menu-item index="/business">
                    <i class="el-icon-menu"></i>
                    <span>商户管理</span>
                </el-menu-item>  
                <el-menu-item index="/order">
                    <i class="el-icon-goods"></i>
                    <span>订单管理</span>
                </el-menu-item>  
                <el-menu-item index="/user">
                    <i class="el-icon-setting"></i>
                    <span>用户管理</span>
                </el-menu-item>
            </el-menu>
        </el-col>
    </el-row> 
</template>
<script>
export default {
    methods: {
        handleOpen(){

        },
        handleClose(){

        }
    }
}
</script>
<style>
  .el-submenu,.el-menu-item{
    width: 200px;
}  
</style>

