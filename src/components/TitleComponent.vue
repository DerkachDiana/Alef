<template>
  <div class="title">{{title}}</div>
</template>

<script>
export default {
  name: 'TitleComponent',
  props: {
    title: String
  }
}
</script>

<style scoped>
  .title {
    font-weight: 500;
    font-family: Montserrat,serif;
    line-height: 24px;
    font-size: 16px;
    margin-bottom: 10px;
  }
</style>
