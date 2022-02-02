<template>
  <HeaderComponent/>
  <div class="container">
    <div class="content-constraint">
      <div class="container__content-constraint__formOne">
        <TitleComponent title="Персональные данные" marginTop="30px"/>
        <InputComponent width="616px" inputValue="Имя" input-type="text"></InputComponent>
        <InputComponent width="616px" input-value="Возраст" input-type="text"></InputComponent>
      </div>
      <AddButtonComponent text="Добавить ребенка"></AddButtonComponent>
      <SaveButton text="Сохранить"></SaveButton>
    </div>
  </div>
  <FooterComponent/>
</template>
<script>
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import TitleComponent from './components/TitleComponent'
import InputComponent from './components/InputComponent'
import AddButtonComponent from './components/AddButtonComponent'
import SaveButton from './components/SaveButton'
export default {
  components: { SaveButton, AddButtonComponent, InputComponent, TitleComponent, FooterComponent, HeaderComponent }
}
</script>
<style>
.container {
  display:flex;
  flex-direction: column;
  align-items: center;
}
.content-constraint {
  display:flex;
  flex-direction: column;
  align-items: center;
  max-width: 1000px;
}
.container__content-constraint__formOne {
  display:flex;
  flex-direction: column;
  gap: 10px
}

</style>
