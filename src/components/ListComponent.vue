<template>
  <div class="list" :style="{'background-color': bgColor, padding: myPadding}">{{personName}},&nbsp;{{age}}&nbsp;{{ageString}}</div>
</template>

<script>
export default {
  name: 'ListComponent',
  props: {
    personName: String,
    age: String,
    bgColor: String,
    myPadding: {
      type: String,
      default: '10px 20px'
    }
  },
  data () {
    return {
      ageYear: ''
    }
  },
  computed: {
    ageString () {
      if (this.age === '') return 'количество лет не указано'
      if (this.age > 4 & this.age < 21 || this.age % 10 === 0) return 'лет'
      else if (this.age % 10 === 1) return 'год'
      else if (this.age % 10 > 0 && this.age % 10 < 5) return 'года'
      else return ''
    }
  }
}
</script>

<style scoped>
  .list {
    border-radius: 5px;
    font-family: Montserrat, serif;
    font-size: 16px;
    font-weight: 700;
  }
</style>
