<template>
  <div class="task-list">
    <div class="task" v-for="task in tasks.tasks" v-bind:key="task.id">
      <input type="checkbox" v-bind:checked="task.isDone" />
      {{ task.title }}
    </div>
    <div>
      <input
        class="task-name-input"
        type="text"
        placeholder="例: 大根を帰って帰る"
        v-model="newTaskName"
      />
      <button class="add" v-on:click="onAddClick(newTaskName)">Add</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Task from "@/domains/Task";
import Tasks from "@/domains/Tasks";

@Component
export default class TaskList extends Vue {
  private tasks = new Tasks([
    new Task("id1", false, "title1"),
    new Task("id2", true, "title2"),
    new Task("id3", false, "title3")
  ]);

  onAddClick(newTaskName: string) {
    this.tasks = this.tasks.add(new Task("id4", false, newTaskName));
  }
}
</script>
