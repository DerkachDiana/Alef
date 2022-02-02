<template>
  <div class="footer">
    <div class="footer__text">all rights reserved</div>
  </div>
</template>

<script>
export default {
  name: 'FooterComponent'
}
</script>

<style scoped>
.footer {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 76px;
  background-color: #FAFAFA;
  box-shadow: 0px 1px 0px rgba(17, 17, 17, 0.1);
}
.footer__text {
  font-size: 13px;
  font-weight: 400;
}
</style>
