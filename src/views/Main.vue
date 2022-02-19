<template>
  <el-container style="height: 100vh;">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <!--  :default-openeds="['1']" -->
      <el-menu router unique-opened :default-active="app.$route.path">
        <el-sub-menu index="1">
          <template v-slot:title>
            <i class="el-icon-message"></i>内容管理
          </template>
          <el-menu-item-group>
            <template v-slot:title>物品</template>
            <el-menu-item index="/items/create">新建物品</el-menu-item>
            <el-menu-item index="/items/list">物品列表</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <template v-slot:title>英雄</template>
            <el-menu-item index="/heroes/create">新建英雄</el-menu-item>
            <el-menu-item index="/heroes/list">英雄列表</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <template v-slot:title>文章</template>
            <el-menu-item index="/articles/create">新建文章</el-menu-item>
            <el-menu-item index="/articles/list">文章列表</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>

        <el-sub-menu index="2">
          <template v-slot:title>
            <i class="el-icon-message"></i>运营管理
          </template>
          <el-menu-item-group>
            <template v-slot:title>广告位</template>
            <el-menu-item index="/ads/create">新建广告位</el-menu-item>
            <el-menu-item index="/ads/list">广告位列表</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>

        <el-sub-menu index="3">
          <template v-slot:title>
            <i class="el-icon-message"></i>系统设置
          </template>
          <el-menu-item-group>
            <template v-slot:title>分类</template>
            <el-menu-item index="/categories/create">新建分类</el-menu-item>
            <el-menu-item index="/categories/list">分类列表</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <template v-slot:title>管理员</template>
            <el-menu-item index="/admin_users/create">新建管理员</el-menu-item>
            <el-menu-item index="/admin_users/list">管理员列表</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>View</el-dropdown-item>
              <el-dropdown-item>Add</el-dropdown-item>
              <el-dropdown-item>Delete</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        <span>用户</span>
      </el-header>

      <el-main>
        <router-view :key="app.$route.path"></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { getCurrentInstance } from 'vue'
export default {
  name: "Main",
  setup() {
    const { appContext } = getCurrentInstance()
    const app = appContext.config.globalProperties

    return {
      appContext,
      app
    }
  }
};
</script>

<style scoped>
.el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
.el-aside {
  color: #333;
}
</style>
