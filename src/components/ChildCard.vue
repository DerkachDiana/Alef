<template>
  <div class="container">
    <div class="container__title-button">
      <div class="container__form">
        <div class="container__form__row">
          <InputComponent input-type="text" input-value="Имя" width="238px"/>
          <InputComponent input-type="text" input-value="Возраст" width="238px"/>
          <DeleteButtonComponent @click="deleteChild"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InputComponent from './InputComponent'
import DeleteButtonComponent from './DeleteButtonComponent'
export default {
  name: 'ChildCard',
  components: { DeleteButtonComponent, InputComponent },
  methods: {
    deleteChild () {

    }
  }
}
</script>

<style scoped>
.container__form__row {
  display: flex;
  flex-direction: row;
  gap: 18px;
  align-items: center;
  justify-content: center;
}
</style>
