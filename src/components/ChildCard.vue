<template>
  <div class="box-1">
    <div class="box-1__title-button">
      <TitleComponent title="Дети (макс. 5)"/>
      <AddButtonComponent text="Добавить ребенка"/>
      <div class="box-1__form">
        <div class="box-1__form__row">
          <InputComponent input-type="text" input-value="Имя" width="260px"/>
          <InputComponent input-type="text" input-value="Возраст" width="260px"/>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TitleComponent from './TitleComponent'
import AddButtonComponent from './AddButtonComponent'
import InputComponent from './InputComponent'
export default {
  name: 'ChildCard',
  components: { InputComponent, AddButtonComponent, TitleComponent }
}
</script>

<style scoped>

</style>
