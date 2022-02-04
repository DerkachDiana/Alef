<template>
  <div class="container">
    <div class="container__constraint">
      <div  v-for="(family, index) in families" :key="index">
        <div class="personal-info">
          <TitleComponent title="Персональные данные"/>
          <ListComponent :person-name="family.parentName" :age="family.parentAge" bg-color="white" my-padding="unset"></ListComponent>
        </div>
        <div v-if="family.children.length!==0" class="container__child">
          <TitleComponent title="Дети"/>
          <div v-for="(child) in families[index].children" :key="child.name">
            <ListComponent :person-name="child.childName" :age="child.childAge" bg-color="#F1F1F1" my-padding="10px 20px"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TitleComponent from '../components/TitleComponent'
import ListComponent from '../components/ListComponent'
import { mapState } from 'vuex'

export default {
  name: 'Preview',
  components: { ListComponent, TitleComponent },
  data () {
    return {
      age: 40,
      personName: 'Степан'
    }
  },
  computed: {
    ...mapState({
      families: state => state.preview.families
    })
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
    margin-top: 10px;
  }
</style>
