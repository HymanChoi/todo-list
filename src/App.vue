<template>
  <div id="app">
    <div class="header">
      <input class="input" type="text" v-model="todo" @keydown="press($event)" />
      <button class="button1" @click="add">添加</button>
      <button class="button3" @click="removeAll">清空</button>
    </div>

    <h3>未完成</h3>
    <ul>
      <li class="item" v-for="(item, key) in todoList" :key="key">
        <div class="row" v-if="!item.checked">
          <input class="checkbox" type="checkbox" v-model="item.checked" @change="save()" />
          <span>{{item.text}}</span>
          <button class="button2" @click="remove(key)">删除</button>
        </div>
      </li>
    </ul>

    <h3>已完成</h3>
    <ul>
      <li class="item" v-for="(item, key) in todoList" :key="key">
        <div class="row" v-if="item.checked">
          <input class="checkbox" type="checkbox" v-model="item.checked" @change="save()" />
          <span class="span_done">{{item.text}}</span>
          <button class="button2" @click="remove(key)">删除</button>
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
body {
  margin: 0;
  padding: 0;
}
/* 去除无序列表前面的黑点 */
li {
  list-style: none;
}
h3 {
  margin-left: 20px;
}
.header {
  background-color: #555555;
}
.input {
  padding: 10px;
  margin: 15px 20px;
  font-size: 14px;
  width: 300px;
}
button {
  /* 去除按钮点击之后的蓝框 */
  outline: none;
  color: white;
  border: none;
  border-radius: 5%;
  padding: 10px 20px;
  font-size: 14px;
  text-align: center;
  text-decoration: none;
}
button:hover {
  cursor: pointer;
  opacity: 0.8;
}
.button1 {
  background-color: #4caf50;
  margin-right: 20px;
}
.button2 {
  background-color: #f44336;
}
.button3 {
  background-color: #008cba;
}
.checkbox {
  zoom: 150%;
  vertical-align: middle;
}
span {
  margin: 0 20px;
}
.span_done {
  color: #aaa;
  text-decoration: line-through;
}
.item {
  margin: 10px 0;
}
.row {
  vertical-align: middle;
}
</style>
