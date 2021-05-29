<template>
  <el-row>
    <el-col>
      <el-menu
        @open="handleOpen"
        @close="handleClose">

        <router-link
          to='/music'>
          <el-menu-item>
            <i class="el-icon-menu"></i>
              music
          </el-menu-item>
        </router-link>

        <router-link
          to='/daifuku'>
          <el-menu-item>
            <i class="el-icon-menu"></i>
            daifuku
          </el-menu-item>
        </router-link>

        <router-link
          to='/okonomi'>
          <el-menu-item>
            <i class="el-icon-menu"></i>
            okonomi
          </el-menu-item>
        </router-link>

        <router-link
          to='/cookie'>
          <el-menu-item>
            <i class="el-icon-menu"></i>
            cookie
          </el-menu-item>
        </router-link>

        <router-link
          to='/tako'>
          <el-menu-item>
            <i class="el-icon-menu"></i>
            tako
          </el-menu-item>
        </router-link>

        <router-link
          to='/hidamari'>
          <el-menu-item>
            <i class="el-icon-menu"></i>
            ひだまり
          </el-menu-item>
        </router-link>

      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
export default {}
</script>
