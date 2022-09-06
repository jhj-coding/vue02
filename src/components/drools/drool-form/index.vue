<template>
  <div>
    <div><span class="demonstration">配置项</span></div>
    <div>
      <el-tag
        v-for="(tag, index) in tags"
        :key="index"
        closable
        @close="handleClose(tag)"
      >
        {{ tag.name }}
      </el-tag>
    </div>
    <div><span class="demonstration">选择配置项</span></div>
    <div class="block">
      <el-cascader
        v-model="value"
        :options="options"
        ref="cascader"
      ></el-cascader>
      <el-button type="primary" @click="onSubmit" :disabled="this.value == null"
        >立即添加</el-button
      >
    </div>
    <el-button
      type="primary"
      @click="tijiao"
      :disabled="this.values.length == 0"
      >规则创建</el-button
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: null,
      options: [
        {
          value: "canshuyi",
          label: "参数1",
          children: [
            {
              value: "xiaoyu",
              label: "小于",
              children: [
                {
                  value: "yi",
                  label: "1",
                },
                {
                  value: "er",
                  label: "2",
                },
                {
                  value: "san",
                  label: "3",
                },
              ],
            },
            {
              value: "dayu",
              label: "大于",
              children: [
                {
                  value: "yi",
                  label: "1",
                },
                {
                  value: "er",
                  label: "2",
                },
                {
                  value: "san",
                  label: "3",
                },
              ],
            },
            {
              value: "dayu",
              label: "等于",
              children: [
                {
                  value: "yi",
                  label: "1",
                },
                {
                  value: "er",
                  label: "2",
                },
                {
                  value: "san",
                  label: "3",
                },
              ],
            },
          ],
        },
        {
          value: "canshuer",
          label: "参数2",
          children: [
            {
              value: "xiaoyu",
              label: "小于",
              children: [
                {
                  value: "yi",
                  label: "1",
                },
                {
                  value: "er",
                  label: "2",
                },
                {
                  value: "san",
                  label: "3",
                },
              ],
            },
            {
              value: "dayu",
              label: "大于",
              children: [
                {
                  value: "yi",
                  label: "1",
                },
                {
                  value: "er",
                  label: "2",
                },
                {
                  value: "san",
                  label: "3",
                },
              ],
            },
            {
              value: "dayu",
              label: "等于",
              children: [
                {
                  value: "yi",
                  label: "1",
                },
                {
                  value: "er",
                  label: "2",
                },
                {
                  value: "san",
                  label: "3",
                },
              ],
            },
          ],
        },
      ],
      tags: [],
      values: [],
      tag: "",
    };
  },
  methods: {
    handleClose(tag) {
      this.tags.splice(this.tags.indexOf(tag), 1);
      this.values.splice(this.tags.indexOf(tag), 1);
    },
    onSubmit() {
      this.$nextTick(() => {
        this.digui(this.$refs["cascader"].getCheckedNodes()[0]);
        this.tags.push({
          name: this.tag,
        });
        this.values.push(this.value);
        this.tag = "";
        this.value = null;
      });
    },

    //递归
    digui(node) {
      if (this.tag.length == 0) {
        this.tag = node.label;
      } else {
        this.tag = node.label + "/" + this.tag;
      }
      if (node.parent != null) this.digui(node.parent);
    },

    tijiao() {
      this.$emit("getFromChildren", this.values);
      this.values.splice(0,this.values.length);
      this.tags.splice(0,this.tags.length);
    },
  },
};
</script>
<style lang="less" scoped>
div {
  margin: 10px;
}
</style>