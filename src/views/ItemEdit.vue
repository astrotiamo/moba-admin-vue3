<template>
  <h1>{{id ? '编辑' : '新建'}}物品</h1>
  <!-- @submit-native-prevent="save" -->
  <el-form label-width="120px"> 
    <!-- <el-form-item label="上级分类">
      <el-select v-model="model.parent">
        <el-option v-for="item in parents" :key="item._id" :value="item._id" :label="item.name"></el-option>
      </el-select>
    </el-form-item> -->
    <el-form-item label="名称">
      <el-input v-model="model.name"></el-input>
    </el-form-item>
    <el-form-item label="图标">
      <!-- mixin getAuthHeaders() uploadUrl -->
      <el-upload
        class="avatar-uploader"
        :action="uploadUrl"
        :headers="getAuthHeaders()"
        :show-file-list="false"
        :on-success="afterUpload">
        <img v-if="model.icon" :src="model.icon" class="avatar">
        <el-icon v-else class="avatar-uploader-icon"><plus /></el-icon>
      </el-upload>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" native-type="submit" @click="save">保存</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { getCurrentInstance, reactive, ref } from 'vue'
import { Plus } from '@element-plus/icons-vue' // eslint-disable-line no-unused-vars
export default {
  name: "ItemEdit",
  components: {
    plus: Plus
  },
  setup() {
    const { appContext } = getCurrentInstance()
    const app = appContext.config.globalProperties

    // console.log(props.id);
    let pageId = ref(app.$route.params.id)
    let model = reactive({
      name: '',
      icon: ''
    })
    
    pageId.value && fetch()

    function afterUpload(res) {
      model.icon = res.url
    }
    async function save() {
      if(pageId.value) {
        await app.$http.put(`rest/items/${pageId.value}`,model)
      } else {
        await app.$http.post(`rest/items`, model)
      }
      app.$message({
        message: '保存成功！',
        type: 'success'
      })
      app.$router.go(-1)
    }
    async function fetch() {
      const res = await app.$http.get(`rest/items/${pageId.value}`)
      model.name = res.data.name
      model.icon = res.data.icon
    }
    return {
      app,
      pageId,
      model,
      afterUpload,
      save,
      fetch
    }
  }
}
</script>

<style scoped>

</style>