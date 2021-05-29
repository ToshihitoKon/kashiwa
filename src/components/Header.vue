<template>
  <el-header>
    <el-space wrap>
      <div>
        <router-link to="/" >
          <el-button type="text">
            <h2>
              <img alt="Vue logo"
                style="max-height: 1em"
                src="@/assets/logo.png">
              Kashiwa
            </h2>
          </el-button>
        </router-link>
      </div>

      <div>
        <Ziho/>
      </div>
    </el-space>
  </el-header>
</template>

<script>
import Ziho from "@/components/okonomi/Ziho"
export default {
  components: {
    Ziho
  }
}
</script>

<style scoped>
.el-header {
  text-align: left;
  border-bottom: 1px solid #dcdfe0;
}
</style>
