<template>
  <div class="container">
    <div class="content-constraint">
      <div class="container__content-constraint__formOne">
        <TitleComponent title="Персональные данные" :style="{'margin-top': '30px'}"/>
        <InputComponent width="594px" inputValue="Имя" input-type="text" @getText="setParentName"></InputComponent>
        <InputComponent width="594px" input-value="Возраст" input-type="text" @getText="setParentAge"></InputComponent>
      </div>
      <div class="content-constraint__childCard">
        <div class="content-constraint__childCard__row">
          <TitleComponent title="Дети (макс. 5)"/>
          <AddButtonComponent @click="addChild" text="Добавить ребенка"/>
        </div>
        <div class="content-constraint__childCard__childCard-SaveButton">
          <div v-for="(child, index) in children" :key="index" >
            {{index}}
            <ChildCard @deleteCard="needToDelete" @newName="setChildName(index, index)"/>
          </div>
          <SaveButton text="Сохранить" @click="createFamily"></SaveButton>
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
import { mapState, mapMutations } from 'vuex'
export default {
  components: { ChildCard, SaveButton, AddButtonComponent, InputComponent, TitleComponent },
  data () {
    return {
      nName: 'ss'
    }
  },
  methods: {
    ...mapMutations({
      setParentName: 'parent/setParentName',
      setParentAge: 'parent/setParentAge',
      addChild: 'children/addChildr',
      needToDelete: 'children/needToDelete',
      createFamily: 'preview/createFamily',
      setChildName: 'children/setChildName'
    }),
    saveName (newname) {
      this.nName = newname
    }
  },
  computed: {
    ...mapState({
      children: state => state.children.children
    })
  },
  watch: {
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
