<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <TaskList />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "./components/HelloWorld.vue";
import TaskList from "./components/TaskList.vue";
import Task from "../src/domains/Task";

@Component({
  components: {
    HelloWorld,
    TaskList
  }
})
export default class App extends Vue {
  get tasks(): Task[] {
    return [
      new Task("id1", false, "title1"),
      new Task("id2", false, "title2"),
      new Task("id3", false, "title3")
    ];
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
