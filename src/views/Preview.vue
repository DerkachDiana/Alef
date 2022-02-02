<template>
  <div class="container">
    <div class="container__constraint">
      <div class="container__personal-info">
        <TitleComponent title="Персональные данные"/>
        <ListComponent :person-name="personName" :age="age" bg-color="white" my-padding="unset"></ListComponent>
      </div>
      <div class="container__child">
        <TitleComponent title="Дети"/>
        <ListComponent :person-name="personName" :age="age" bg-color="#F1F1F1" my-padding="10px 20px"></ListComponent>
      </div>
    </div>
  </div>
</template>

<script>
import TitleComponent from '../components/TitleComponent'
import ListComponent from '../components/ListComponent'
export default {
  name: 'Preview',
  components: { ListComponent, TitleComponent },
  data () {
    return {
      age: 40,
      personName: 'Степан'
    }
  }
}
</script>

<style scoped>
.container {
  display:flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 136px;
  margin-top: 30px;
}
  .container__constraint {
    display:flex;
    flex-direction: column;
    align-items: start;
    max-width: 1000px;
    min-width: 750px;
    gap: 44px;
  }
  .container__child {
    display:flex;
    flex-direction: column;
    align-items: start;
  }
</style>
