<template>
  <div class="undolist">
    <div class="title">
      正在进行
      <span data-test="count" class="count">{{ list.length }}</span>
    </div>
    <ul class="list">
      <li class="item" v-for="(item, index) in list" :key="index" data-test="item">
        {{ item }}
        <span
          class="delete"
          data-test="delete-button"
          @click="() => {handleClick(index)}"
        >-</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'UndoList',
  props: ['list'],
  methods: {
    handleClick(index) {
      this.$emit('delete', index)
    }
  }
}
</script>

<style scoped lang="stylus">
.undolist {
  width: 600px;
  margin: 0 auto;
}

.title {
  margin: 10px 0;
  line-height: 30px;
  font-size: 24px;
  font-weight: bold;
}

.count {
  margin-top: 5px;
  float: right;
  display: block;
  width: 20px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  background: #e6e6e6;
  border-radius: 10px;
  font-size: 12px;
  color: #000;
}

.list {
  list-style-type: none;
}

.item {
  margin-bottom: 10px;
  line-height: 32px;
  font-size: 14px;
  background: #fff;
  border-left: 5px solid #629a9a;
  border-radius: 3px;
  text-indent: 10px;
}

.delete {
  display: block;
  float: right;
  margin-top: 5px;
  margin-right: 10px;
  width: 20px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  background: #e6e6e6;
  border-radius: 10px;
  font-size: 12px;
  color: #000;
  text-indent: 0px;
  cursor: pointer;
}
</style>
