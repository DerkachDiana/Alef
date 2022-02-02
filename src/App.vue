<template>
 <div class="app">
   <HeaderComponent/>
   <router-view></router-view>
   <FooterComponent/>
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

</style>
