
# TodoList

### 项目介绍
这是一个基于Vue的TodoList，包含基本的添加，删除事件功能，能切换“未完成”和“已完成”事件，利用Local Storage作本地数据存储，并能一键清除缓存。  
[项目预览](https://hymanchoi.github.io/TodoList/dist/index.html)

### 项目技术
Vue

### 安装教程
1. 安装依赖
```
npm install/cnpm install
```
2. 运行项目
```
npm run serve
```
3. 压缩打包
```
npm run build
```

### 使用说明
1. 在输入框输入事件，点击“添加”按钮或按键盘“Enter”，添加事件到未完成列表
2. 点击未完成事件前的单选框，添加该事件到已完成列表，从未完成列表去除
3. 点击已完成事件前的单选框，返回该事件到未完成列表，从已完成列表去除
4. 点击事件后的“删除”按钮，从该列表中删除该事件
5. 点击“清空”按钮，清空所有列表
