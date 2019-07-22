<template>
  <div class="task-list">
    <div class="task" v-for="task in tasks" v-bind:key="task.id">
      <input type="checkbox" v-bind:checked="task.isDone" />
      {{ task.title }}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Task from "@/domains/Task";

@Component
export default class TaskList extends Vue {
  get tasks(): Task[] {
    return [
      new Task("id1", false, "title1"),
      new Task("id2", true, "title2"),
      new Task("id3", false, "title3")
    ];
  }
}
</script>
