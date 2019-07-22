import Task from './Task';

export default class Tasks {
    readonly tasks: Task[]

    constructor(tasks: Task[]) {
        this.tasks = tasks;
    }

    add(task: Task): Tasks {
        return new Tasks([...this.tasks, task])
    }
}