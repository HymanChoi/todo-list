<template>
  <div id="app">
    <div class="header">
      <input class="input" type="text" v-model="todo" @keydown="press($event)" />
      <button class="btn1" @click="add">添加</button>
      <button class="btn3" @click="removeAll">清空</button>
    </div>

    <h3>未完成</h3>
    <ul>
      <li class="item" v-for="(item, key) in todoList" :key="key">
        <div class="row" v-if="!item.checked">
          <input class="checkbox" type="checkbox" v-model="item.checked" @change="save()" />
          <span>{{item.text}}</span>
          <button class="btn2" @click="remove(key)">删除</button>
        </div>
      </li>
    </ul>

    <h3>已完成</h3>
    <ul>
      <li class="item" v-for="(item, key) in todoList" :key="key">
        <div class="row" v-if="item.checked">
          <input class="checkbox" type="checkbox" v-model="item.checked" @change="save()" />
          <span class="span_done">{{item.text}}</span>
          <button class="btn2" @click="remove(key)">删除</button>
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
    },
    removeAll() {
      // 清空缓存
      storage.remove("todoList");
      location.reload();
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

</style>
