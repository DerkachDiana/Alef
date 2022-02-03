<template>
  <div class="container">
    <div class="container__title-button">
      <div class="container__form">
        <div class="container__form__row">
          <InputComponent input-type="text" input-value="Имя" width="238px" @getText="changeName"/>
          <InputComponent input-type="text" input-value="Возраст" width="238px" @getText="changeName"/>
          <DeleteButtonComponent @click="deleteChild"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InputComponent from './InputComponent'
import DeleteButtonComponent from './DeleteButtonComponent'
import { mapMutations } from 'vuex'
export default {
  name: 'ChildCard',
  emits: ['deleteCard', 'newName'],
  props: {
    index: Number
  },
  components: { DeleteButtonComponent, InputComponent },
  methods: {
    deleteChild () {
      this.$emit('deleteCard', true)
    },
    ...mapMutations({
      setChildName: 'children/setChildName',
      setChildAge: 'children/setChildAge',
      inputText: 'children/textMutation'
    }),
    changeName (val) {
      this.getName = val
    }
  },
  data () {
    return {
      childName: '',
      childAge: 0,
      textFromInput: '',
      getName: ''
    }
  },
  watch: {
    getName (newVal) {
      this.$emit('newName', this.getName)
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
