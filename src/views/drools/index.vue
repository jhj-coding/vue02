<template>
  <div>
    <div style="width:50%">
      <el-descriptions>
        <el-descriptions-item label-class-name="my-label" content-class-name="my-content">
          {{ this.content.a }}</el-descriptions-item
        >
      </el-descriptions>
    </div>
    <div>
      <DroolForm @getFromChildren="fromChildren"></DroolForm>
    </div>
  </div>
</template>

<script>
const DroolForm = () => import("@/components/drools/drool-form/index.vue");
export default {
  components: { DroolForm },
  data() {
    return {
      content: {
        a:
          "package postureexception;" +
          "\n" +
          "import com.xidian.drools.Alarmv1Fact;" +
          "\n" +
          "import org.slf4j.Logger;" +
          "\n" +
          "import java.time.LocalDateTime;" +
          "\n" +
          "global Logger logger;" +
          "\n",
        b:
          'rule "posture_exception_two"' +
          "\n" +
          "    when" +
          "\n" +
          "        $af:Alarmv1Fact(Double.compare(Math.abs(realRoll),30)==1)" +
          "\n" +
          "    then" +
          "\n" +
          '        $af.getTextList().add("姿态异常：横滚角度>绝对值30度");' +
          "\n" +
          '       logger.info("触发posture_exception_two,横滚角度>绝对值30度");' +
          "\n" +
          "end;" +
          "\n",
        c: 
          'rule "posture_exception_one"' +
          "\n" +
          "    when" +
          "\n" +
          "        $af:Alarmv1Fact(Double.compare(Math.abs(realPitch),30)==1)" +
          "\n" +
          "    then" +
          "\n" +
          '        $af.getTextList().add("姿态异常：俯仰角度>绝对值30度");' +
          "\n" +
          '        logger.info("触发posture_exception_one,俯仰角度>绝对值30度");' +
          "\n" +
          "end;" +
          "\n",
      },
    };
  },
  methods: {
    fromChildren(val) {
      console.log(val);
      this.content.a=this.content.a+val;
    },
  },
};
</script>

<style lang="less">
* {
  white-space: pre-line;
}
.my-content {
  background: #fde2e2;
}
 .my-label.has-colon::after {
    content: '';
    position: relative;
    top: -0.5px;
}
</style>
<style>

</style>