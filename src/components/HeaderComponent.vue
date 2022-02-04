<template>
<div class="header">
  <div class="header__logo-block">
    <img src="../assets/Logo_imi_horizontal.svg" class="header__logo">
  </div>
  <div class="header__nav">
    <router-link to="/" class="header__nav__text">Форма</router-link>
    <router-link to="/Preview" class="header__nav__text">Превью</router-link>
  </div>
  <div class="header__third-block"></div>
</div>
</template>

<script>
export default {
  name: 'HeaderComponent'
}
</script>

<style scoped>
.header {
  display: flex;
  flex-direction:row;
  align-items: center;
  height: 76px;
  box-shadow: 0px 1px 0px rgba(17, 17, 17, 0.1);
}
.header__logo-block {
  display: flex;
  justify-content: left;
  flex: 1;
}
.header__nav {
  display: flex;
  justify-content: center;
  gap: 24px;
  flex: 1;
  color: rgba(17, 17, 17, 0.48);
  font-family: Montserrat, serif;
  font-size: 14px;
  font-weight: 400;
}
.header__nav__text {
  text-decoration: none;
}
.header__third-block {
  display: flex;
  flex: 1;
}
</style>
