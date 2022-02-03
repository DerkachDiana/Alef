<template>
  <div class="container">
    <div class="container__title-button">
      <div class="container__form">
        <div class="container__form__row">
          <InputComponent input-type="text" input-value="Имя" width="238px" @getText="getChildName"/>
          <InputComponent input-type="text" input-value="Возраст" width="238px" @getText="getChildAge"/>
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
  emits: ['deleteCard'],
  components: { DeleteButtonComponent, InputComponent },
  methods: {
    deleteChild () {
      this.$emit('deleteCard', true)
    },
    getChildName (childName) {
      this.childName = childName
    },
    getChildAge (childAge) {
      this.childAge = childAge
    }
  },
  data () {
    return {
      childName: '',
      childAge: 0
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
