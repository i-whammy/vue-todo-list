export default class Task {
    readonly id: string;
    readonly isDone: boolean;
    readonly title: string;
    readonly dueDate?: Date;

    constructor(id: string, isDone: boolean, title: string, dueDate?: Date) {
        this.id = id;
        this.isDone = isDone;
        this.title = title;
        this.dueDate = dueDate;
    }

    toggleDone(): Task {
        return this.isDone ? this.undone() : this.done();
    }

    done(): Task {
        return new Task(this.id, true, this.title, this.dueDate)
    }

    undone(): Task {
        return new Task(this.id, false, this.title, this.dueDate)
    }

    isExpired(): boolean {
        return this.dueDate! < new Date();
    }
}