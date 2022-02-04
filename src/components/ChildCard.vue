<template>
  <div class="container">
    <div class="container__title-button">
      <div class="container__form">
        <div class="container__form__row">
          <InputComponent input-type="text" input-value="Имя" width="238px" v-model="name" @getText="changeName"/>
          <InputComponent input-type="text" input-value="Возраст" width="238px" v-model="age" @getText="changeAge"/>
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
  emits: ['deleteCard', 'newName', 'newAge'],
  components: { DeleteButtonComponent, InputComponent },
  props: {
    childName: String,
    childAge: String
  },
  computed: {
    name: {
      get () { return this.childName },
      set (val) { this.$emit('newName', val) }
    },
    age: {
      get () { return this.childAge },
      set (val) { this.$emit('newAge', val) }
    }
  },
  methods: {
    deleteChild () {
      this.$emit('deleteCard', true)
    },
    changeName (val) {
      this.getName = val
    },
    changeAge (age) {
      this.getAge = age
    }
  },
  data () {
    return {
      textFromInput: '',
      getName: '',
      getAge: 0
    }
  },
  watch: {
    getName (newVal) {
      this.$emit('newName', newVal)
    },
    getAge (newVal) {
      this.$emit('newAge', newVal)
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
