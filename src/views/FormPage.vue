<template>
  <div class="container">
    <div class="content-constraint">
      <div class="container__content-constraint__formOne">
        <TitleComponent title="Персональные данные" :style="{'margin-top': '30px'}"/>
        <InputComponent width="594px" inputValue="Имя" input-type="text"></InputComponent>
        <InputComponent width="594px" input-value="Возраст" input-type="text"></InputComponent>
      </div>
      <div class="content-constraint__childCard">
        <div class="content-constraint__childCard__row">
          <TitleComponent title="Дети (макс. 5)"/>
          <AddButtonComponent @click="addChild" text="Добавить ребенка"/>
        </div>
        <div class="content-constraint__childCard__childCard-SaveButton">
          <div v-for="child in children" :key="child">
            <ChildCard />
          </div>
          <SaveButton text="Сохранить"></SaveButton>
          {{this.childNumber}}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TitleComponent from '@/components/TitleComponent'
import InputComponent from '@/components/InputComponent'
import AddButtonComponent from '@/components/AddButtonComponent'
import SaveButton from '@/components/SaveButton'
import ChildCard from '@/components/ChildCard'
export default {
  components: { ChildCard, SaveButton, AddButtonComponent, InputComponent, TitleComponent },
  data () {
    return {
      childNumber: 0,
      children: [],
      child: {
        id: 2,
        name: '',
        age: 15
      }
    }
  },
  methods: {
    addChild () {
      if (this.children.length < 5) this.children.push(this.child)
    }
  },
  computed: {
  }
}
</script>
<style>
.container {
  display:flex;
  flex-direction: column;
  align-items: center;
}
.content-constraint {
  display:flex;
  flex-direction: column;
  align-items: center;
  max-width: 1000px;
  gap: 44px;
}
.container__content-constraint__formOne {
  display:flex;
  flex-direction: column;
  gap: 10px
}
.content-constraint__childCard {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 11px;
}
.content-constraint__childCard__row {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 297px;
}
.content-constraint__childCard__childCard-SaveButton {
  display: flex;
  flex-direction: column;
  gap: 11px;
  align-items: start;
}
</style>
