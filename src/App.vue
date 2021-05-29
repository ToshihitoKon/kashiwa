<template>
  <Header />
  <el-container>
    <el-aside width="200px">
      <Sidebar />
    </el-aside>
    <el-main>
      <router-view />
    </el-main>
  </el-container>
</template>

<script>
import Header from '@/components/Header.vue'
import Sidebar from '@/components/Sidebar.vue'

export default {
  name: 'app',
  components: {
    Header,
    Sidebar
  }
}
</script>
