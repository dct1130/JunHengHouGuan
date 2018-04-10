<template>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="商户名称" prop="busName">
            <el-input v-model="ruleForm.busName"></el-input>
        </el-form-item>
        <el-form-item label="商户图像" prop="busImg">
            <el-upload
              class="avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload">
              <img v-if="ruleForm.busImg" :src="ruleForm.busImg" class="avatar"> 
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
        </el-form-item>
        <el-form-item label="商户详情"> 
          <quill-editor 
            v-model="content"
            ref="myQuillEditor"
            :options="editorOption"
            @blur="onEditorBlur($event)"
            @focus="onEditorFocus($event)"
            @ready="onEditorReady($event)">
          </quill-editor>
        </el-form-item> 
        <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
            <el-button type="primary" @click="saveForm('ruleForm')">保存</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
            <el-button @click="cancleForm">取消</el-button>
        </el-form-item>
    </el-form>
</template>
<style>
  .avatar-uploader .el-upload {
      border: 1px dashed #d9d9d9;
      border-radius: 6px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
      border-color: #409EFF;
    }
    .avatar-uploader-icon {
      font-size: 28px;
      color: #8c939d;
      width: 178px;
      height: 178px;
      line-height: 178px;
      text-align: center;
    }
    .avatar {
      width: 178px;
      height: 178px;
      display: block;
    }
</style>

<script>
// 富文本
// import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
// import 'quill/dist/quill.bubble.css'
import { quillEditor } from 'vue-quill-editor'
  export default {
    data() {
      return {
        content: '',
        editorOption: {
          modules:{
              toolbar:[
                ['bold', 'italic', 'underline', 'strike'],        // 加粗、倾斜、下划线、删除线
                [{ 'list': 'ordered'}, { 'list': 'bullet' }],     // 列表
                [{ 'indent': '-1'}, { 'indent': '+1' }],          // 缩进
                [{ 'direction': 'rtl' }],                         // 居左居右
                [{ 'header': [1, 2, 3, 4, 5, 6, false] }],        // 标题
                [{ 'color': [] }, { 'background': [] }],          // 颜色
                [{ 'font': [] }],                                 // 字体
                [{ 'align': [] }],                                // 对齐方式
                ['clean'],                                        // 清除样式  
                ['link'],                                         // 链接
                ['image'],                                        // 图片
                ['video']                                         // 视频
              ]
          },
          theme: 'snow'
        },
        ruleForm: {
          busName: '',
          busImg: ''
        },
        rules: {
          busName: [
            { required: true, message: '请输入商户名称', trigger: 'blur' },
            // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          busImg: [
            { required: true, message: '请上传图像' },
          ]
        }
      };
    },
    components: {
      quillEditor
    },
    methods: {
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
      onEditorBlur(quill) {
        console.log('editor blur!', quill)
      },
      onEditorFocus(quill) {
        console.log('editor focus!', quill)
      },
      onEditorReady(quill) {
        console.log('editor ready!', quill)
      },



      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
              console.log(this.ruleForm)
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      saveForm(){

      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      cancleForm(){
        this.$parent.showForm = false
      }
    },
    watch:{
        '$parent.showForm'(nVal){
            if(nVal && this.$parent.isNew){
                this.resetForm('ruleForm')
            }
        }
    }
  }
</script>