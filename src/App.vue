<template>
  <div id="app">
    <input type="text" v-model="todo" @keydown="press($event)" />
    <button @click="add">添加</button>
    <hr />
    <h3>未完成</h3>
    <ul>
      <li v-for="(item, key) in todoList" :key="key">
        <div v-if="!item.checked">
          <input type="checkbox" v-model="item.checked" @change="save()" />
          {{item.text}} ---
          <button @click="remove(key)">删除</button>
        </div>
      </li>
    </ul>
    <h3>已完成</h3>
    <ul>
      <li v-for="(item, key) in todoList" :key="key">
        <div v-if="item.checked">
          <input type="checkbox" v-model="item.checked" @change="save()" />
          {{item.text}} ---
          <button @click="remove(key)">删除</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import storage from "./model/stotage";

export default {
  name: "app",
  data() {
    return {
      todo: "",
      todoList: []
    };
  },
  methods: {
    add() {
      // 添加到todoList
      this.todoList.push({ checked: false, text: this.todo }); 
      // 清空输入框
      this.todo = ""; 
      // 添加缓存
      storage.set("todoList", this.todoList);
    },
    press(e) {
      if (e.which == 13) {
        this.add();
      }
    },
    remove(key) {
      // 从todoList中移除
      this.todoList.splice(key, 1);
      // 添加缓存
      storage.set("todoList", this.todoList);
    },
    save() {
      // 添加缓存
      storage.set("todoList", this.todoList);
    }
  },
  mounted() {
    // 获取缓存
    let list = storage.get("todoList");
    // 如果有缓存，赋值给todoList
    if (list) {
      this.todoList = list;
    }
  }
};
</script>

<style>
li {
  list-style: none;
}
</style>
