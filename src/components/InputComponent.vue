<template>
  <div class="base-input">
    <div class="textAboveTheInput">{{inputValue}}</div>
    <input :type="inputType" class="my-input-text" :style="{'width': width}" v-model="text">
  </div>
</template>

<script>

export default {
  name: 'InputComponent',
  emits: ['getText', 'update:modelValue'],
  props: {
    width: String,
    modelValue: String,
    inputValue: String,
    inputType: {
      type: String,
      default: 'text'
    }
  },
  computed: {
    text: {
      get () { return this.modelValue },
      set (val) {
        this.$emit('update:modelValue', val)
        this.$emit('getText', val)
      }
    }
  }
}
</script>

<style scoped>
.textAboveTheInput {
  padding-left: 2px;
  border: none;
}
.my-input-text {
  font-family: Montserrat, serif;
  font-size: 14px;
  font-weight: 400;
  border: none;
  line-height: 24px;
  padding-top: 2px;
}
.my-input-text :active, :hover, :focus {
  outline: 0;
  outline-offset: 0;
}
.base-input {
  height:46px;
  padding-left: 16px;
  padding-top: 8px;
  border-width: 1px;
  border-color: #F1F1F1;
  border-style: solid;
  color: rgba(17, 17, 17, 0.48);
  font-family: Montserrat, serif;
  font-size: 13px;
  font-weight: 400;
  border-radius: 4px;
}
</style>
