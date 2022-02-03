<template>
 <div class="app">
   <HeaderComponent/>
   <router-view class="content"></router-view>
   <FooterComponent class="footer"/>
 </div>
</template>
<script>
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
export default {
  components: { FooterComponent, HeaderComponent }
}
</script>
<style>
.content {
  min-height: 80vh;
}
.footer {
  margin-top: 20px;
}
</style>
