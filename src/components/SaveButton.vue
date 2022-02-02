<template>
  <div class="button">
    {{text}}
  </div>
</template>

<script>
export default {
  name: 'SaveButton',
  props: {
    text: String
  }
}
</script>

<style scoped>
  .button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 118px;
    height: 34px;
    padding: 10px 20px;
    background-color: #01A7FD;
    color: white;
    border-radius: 40px;
    font-family: Montserrat, serif;
    font-weight: 400;
    line-height: 78px;
  }
</style>
