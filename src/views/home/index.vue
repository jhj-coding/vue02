<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick" type="border-card">
      <el-tab-pane label="请选择" disabled name="init">
      </el-tab-pane>
      <el-tab-pane
        :label="item.label"
        :name="item.name"
        v-for="(item, index) in this.lableAndName"
        :key="index"
      >
        <div v-if="activeName === item.name">
          <router-view />
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeName: "init",
      lableAndName: [
        {
          label: "世界地图",
          name: "first",
        },
        {
          label: "中国地图",
          name: "second",
        },
        {
          label: "规则校验",
          name: "third",
        },
      ],
    };
  },
  methods: {
    handleClick() {
      // console.log(this.activeName);
      if (this.activeName === "first") {
        this.$router.push({
          path: "/test",
        });
      }
      if (this.activeName === "second") {
        this.$router.push({
          path: "/zh-map",
        });
      }
      if (this.activeName === "third") {
        this.$router.push({
          path: "/drools",
        });
      }
    },
  },
};
</script>