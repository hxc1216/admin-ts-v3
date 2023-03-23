<script lang="ts" setup>
import ThemeSwitch from '@/components/ThemeSwitch/index.vue'
import { User, Lock, Key, Picture, Loading } from '@element-plus/icons-vue'
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/modules/user'

const router = useRouter()
const loading = ref(false)

const loginFormRef = ref<FormInstance | null>(null)
const loginForm = reactive({
  username: 'admin',
  password: '123456',
  code: ''
})

const loginRules: FormRules = {
  username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' }
  ],
  code: [{ required: true, message: '请输入验证码', trigger: 'blur' }]
}

const submitForm = () => {
  loginFormRef.value?.validate((valid: boolean) => {
    if (valid) {
      useUserStore()
        .login(loginForm)
        .then((res) => {
          router.push('/')
        })
    }
  })
}
</script>
<template>
  <div class="login-container flex-all-center">
    <ThemeSwitch class="theme-switch" />
    <div class="login-wrap">
      <div class="login-title flex-all-center">v3-admin-vite</div>
      <div class="login-content">
        <el-form ref="loginFormRef" :model="loginForm" :rules="loginRules">
          <el-form-item prop="username">
            <el-input
              v-model.trim="loginForm.username"
              placeholder="用户名"
              type="text"
              tabindex="1"
              :prefix-icon="User"
              size="large"
            />
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              v-model.trim="loginForm.password"
              placeholder="密码"
              type="password"
              tabindex="2"
              :prefix-icon="Lock"
              size="large"
              show-password
            />
          </el-form-item>
          <el-button
            :loading="loading"
            tabindex="3"
            type="primary"
            size="large"
            @click.prevent="submitForm"
          >
            登 录
          </el-button>
        </el-form>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.login-container {
  width: 100%;
  height: 100%;

  .theme-switch {
    position: fixed;
    top: 5%;
    right: 5%;
  }

  .login-wrap {
    width: 480px;
    border-radius: 20px;
    box-shadow: 0 0 10px #dcdfe6;
    background-color: #fff;
    overflow: hidden;

    .login-title {
      height: 100px;
    }

    .login-content {
      padding: 20px 50px 50px 50px;

      .el-button {
        width: 100%;
        margin-top: 10px;
      }
    }
  }
}
</style>
