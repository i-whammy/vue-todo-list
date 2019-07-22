<template>
  <div class="task-list">
    <div
      class="task"
      v-for="(task, index) in tasks.tasks"
      v-bind:index="index"
      v-bind:key="task.id"
    >
      <input type="checkbox" v-bind:checked="task.isDone" />
      <div class="task-name">
        {{ task.title }}
      </div>
      <div class="due-date">
        {{ task.dueDate }}
      </div>
      <div>
        <button class="delete-button" v-on:click="onDeleteClick(index)">
          X
        </button>
      </div>
    </div>
    <div>
      <input
        class="task-name-input"
        type="text"
        placeholder="例: 大根を帰って帰る"
        v-model="newTaskName"
      />
      <input class="task-due-date-input" type="date" v-model="dueDate" />
      <button class="add" v-on:click="onAddClick(newTaskName, dueDate)">
        Add
      </button>
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

  onAddClick(newTaskName: string, dueDate?: Date) {
    this.tasks = this.tasks.add(
      new Task(Date.now().toString(), false, newTaskName, dueDate)
    );
  }

  onDeleteClick(index: number) {
    this.tasks = this.tasks.remove(index);
  }
}
</script>

<style lang="scss" scoped>
.task {
  display: flex;
}
.task-name {
  margin: 0 50px;
}
</style>
