<template>
  <div class="button">
    <div class="button__plus"><img src="../assets/plus.svg"> </div>
    <div class="button__text">{{text}}</div>
  </div>
</template>

<script>
export default {
  name: 'AddButtonComponent',
  props: {
    text: String
  }
}
</script>

<style scoped>
  .button {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px 20px;
    width: 164px;
    height: 24px;
    border-style: solid;
    border-color: #01A7FD;
    border-radius: 45px;
    border-width: 2px;
    gap: 4px;
  }
  .button__text {
    font-family: Montserrat, serif;
    font-size: 14px;
    font-weight: 400;
    color: #01A7FD;
  }
  .button__plus {
    height: 24px;
  }
</style>
