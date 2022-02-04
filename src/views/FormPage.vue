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
          <TitleComponent v-if="children.length!==0" title="Дети (макс. 5)"/>
          <AddButtonComponent v-if="children.length<=4" @click="addChild" text="Добавить ребенка"/>
        </div>
        <div class="content-constraint__childCard__childCard-SaveButton">
          <div v-for="(child, index) in children" :key="index" >
            <ChildCard
              :child-age="child.childAge"
              :child-name="child.childName"
              @deleteCard="needToDelete(child)"
              @newName="setChildName({ i: index, myName: $event })"
              @newAge="setChildAge({ ind: index, myAge: $event })"
            />
          </div>
          <SaveButton text="Сохранить" @click="this.createFamily( { parentName: parentName, parentAge: parentAge, children: children })"></SaveButton>
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
      nName: ''
    }
  },
  methods: {
    ...mapMutations({
      setParentName: 'parent/setParentName',
      setParentAge: 'parent/setParentAge',
      addChild: 'children/addChildr',
      needToDelete: 'children/needToDelete',
      setChildName: 'children/setChildName',
      setChildAge: 'children/setChildAge',
      createFamily: 'createFamily',
      clearChildArea: 'children/clearChildrenArea',
      clearParentArea: 'parent/clearParentArea'
    })
  },
  computed: {
    ...mapState({
      children: state => state.children.children,
      parentName: state => state.parent.parent.parentName,
      parentAge: state => state.parent.parent.parentAge
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
