<template>
  <div class="task-list">
    <div class="task" v-for="task in tasks.tasks" v-bind:key="task.id">
      <input type="checkbox" v-bind:checked="task.isDone" />
      {{ task.title }}
    </div>
    <button class="add" v-on:click="onAddClick">Add</button>
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

  onAddClick() {
    this.tasks = this.tasks.add(new Task("id4", false, "title4"));
  }
}
</script>
