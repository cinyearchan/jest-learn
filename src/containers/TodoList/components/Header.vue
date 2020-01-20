<template>
  <div class="header">
    <div class="header-content">
      TodoList
      <input
        class="header-input"
        placeholder="TodoItem"
        data-test="header-input"
        :value="inputValue"
        @input="e => changeInputValue(e.target.value)"
        @keyup.enter="addTodoItem"
      />
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'Header',
  props: {},
  computed: {
    ...mapState({
      inputValue: state => state.inputValue
    })
  },
  data() {
    return {
      // inputValue: ''
    }
  },
  methods: {
    addTodoItem() {
      if (this.inputValue) {
        this.$emit('add', this.inputValue)
        this.changeInputValue('')
      }
    },
    ...mapMutations({
      changeInputValue: 'changeInputValue'
    })
  }
}
</script>

<style scoped lang="stylus">
.header {
  line-height: 60px;
  background: #333;
}

.header-content {
  width: 600px;
  margin: 0 auto;
  color: #fff;
  font-size: 24px;
}

.header-input {
  float: right;
  width: 360px;
  margin-top: 14px;
  line-height: 24px;
  outline: none;
  color: #333;
  text-indent: 10px;
}
</style>
