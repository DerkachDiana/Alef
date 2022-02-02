<template>
  <HeaderComponent/>
  <TitleComponent title="Персональные данные"/>

  <FooterComponent/>
</template>

<script>
import HeaderComponent from '../components/HeaderComponent'
import FooterComponent from '../components/FooterComponent'
import TitleComponent from '../components/TitleComponent'
export default {
  name: 'Preview',
  components: { TitleComponent, FooterComponent, HeaderComponent }
}
</script>

<style scoped>

</style>
