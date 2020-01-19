<template>
  <div>
    <Header @add="addUndoItem" />
    <!-- <ul>
      <li v-for="item in undoList" :key="item">{{ item }}</li>
    </ul>-->
    <UndoList
      :list="undoList"
      @delete="handleItemDelete"
      @status="handleStatusChange"
      @reset="handleStatusReset"
      @change="changeItemValue"
    />
  </div>
</template>

<script>
import Header from './components/Header'
import UndoList from './components/UndoList'
export default {
  name: 'TodoList',
  components: {
    Header,
    UndoList
  },
  data() {
    return {
      undoList: []
    }
  },
  methods: {
    addUndoItem(inputValue) {
      this.undoList.push({
        status: 'div',
        value: inputValue
      })
    },
    handleItemDelete(index) {
      this.undoList.splice(index, 1)
    },
    handleStatusChange(index) {
      const newList = []
      this.undoList.forEach((item, itemIndex) => {
        newList.push({
          status: itemIndex === index ? 'input' : 'div',
          value: item.value
        })
      })
      this.undoList = newList
    },
    handleStatusReset() {
      this.undoList = this.undoList.map(item => {
        return {
          status: 'div',
          value: item.value
        }
      })
    },
    changeItemValue(target) {
      this.undoList.splice(target.index, 1, {
        status: 'input',
        value: target.value
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus"></style>
