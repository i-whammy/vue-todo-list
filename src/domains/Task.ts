export default class Task {
    readonly isDone: boolean;
    readonly title: string;
    readonly dueDate?: Date;

    constructor(isDone: boolean, title: string, dueDate?: Date) {
        this.isDone = isDone;
        this.title = title;
        this.dueDate = dueDate;
    }

    toggleDone(): Task {
        return this.isDone ? this.undone() : this.done();
    }

    done(): Task {
        return new Task(true, this.title, this.dueDate)
    }

    undone(): Task {
        return new Task(false, this.title, this.dueDate)
    }
}