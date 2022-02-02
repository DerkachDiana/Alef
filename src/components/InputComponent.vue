<template>
  <input :type="inputType" class="input-text" :style="{'width': width}" :value="inputValue" onfocus="value=''">
</template>

<script>
export default {
  name: 'InputComponent',
  props: {
    width: String,
    inputValue: String,
    inputType: String
  },
  data () {
    return {
    }
  },
  computed: {
  }
}
</script>

<style scoped>
.input-text {
  height: 56px;
  border-color: #F1F1F1;
  border-style: solid;
  border-radius: 4px;
  color: rgba(17, 17, 17, 0.48);
  font-family: Montserrat, serif;
  font-size: 13px;
  font-weight: 400;
}

</style>
