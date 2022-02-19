import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'element-plus/dist/index.css'
import { ElMessageBox, ElMessage } from 'element-plus'

import '../src/assets/css/style.css'

import http from './http'
// Vue.prototype.$http = http

// createApp(App).mount('#app')
const app = createApp(App)

app.config.globalProperties.$http = http
app.config.globalProperties.$message = ElMessage
app.config.globalProperties.$confirm = ElMessageBox

app.mixin({
  computed: {
    uploadUrl() {
      return app.config.globalProperties.$http.defaults.baseURL + '/upload'
    }
  },
  methods: {
    getAuthHeaders() {
      return {
        Authorization: `Bearer ${localStorage.token || ''}`
      }
    }
  }
})

app.use(router)
// app.use(ElementPlus)
app.mount('#app')
