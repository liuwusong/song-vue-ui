<template>
  <div>
    <s-alert>默认提示文字</s-alert>
    <s-alert type="success" closable>成功提示文字</s-alert>
    <s-alert type="error">错误提示文字</s-alert>
    <s-alert type="warning">警告提示文字</s-alert>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {};
  }
};
</script>
